'use client'

import { useState, useCallback, useMemo } from 'react'
import { format, addMinutes } from 'date-fns'
import { EnrichedDose, PhaseStatus, SubstanceGroup } from './dose-timeline-types'
import {
  MOBILE_SVG_W,
  MOBILE_SVG_H,
  MOBILE_PT,
  MOBILE_PL,
  MOBILE_PR,
  MOBILE_GH,
  phaseColors,
  markerHex,
  NOW_INDICATOR,
  ROUTE_PALETTE,
} from './dose-timeline-constants'
import {
  toMobileX,
  toMobileY,
  mobileCurvePath,
  mobileAreaPath,
  intensityAt,
  phaseNameAt,
  isPhasePast,
  getNowProgress,
  formatMinutes,
  formatPhaseName,
  combinedIntensityAt,
} from './dose-timeline-utils'
import { formatDoseAmount } from '@/lib/utils'

/* ================================================================== */
/*  Shared helper — defined once in this file                          */
/* ================================================================== */

/**
 * Returns true if any dose in the group is still active
 * (i.e., not in `ended` or `not_started` state).
 */
function hasIncompletePhases(group: SubstanceGroup): boolean {
  return group.routes.some((route) =>
    route.doses.some((dose) => {
      const phase = dose.status.phase
      return phase !== 'ended' && phase !== 'not_started'
    }),
  )
}

/* ================================================================== */
/*  Touch-tooltip state type                                           */
/* ================================================================== */

interface TouchInspect {
  x: number
  progress: number
  phase: string
  intensity: number
  timeFromStart: string
  absoluteTime: string
}

/* ================================================================== */
/*  Props                                                              */
/* ================================================================== */

interface MobilePhaseBarProps {
  group: SubstanceGroup
  /** Optional extra class names for the wrapper */
  className?: string
}

/* ================================================================== */
/*  Phase progress bar (visual indicator below header)                 */
/* ================================================================== */

function PhaseProgressBar({
  dose,
}: {
  dose: EnrichedDose
}) {
  const { timings, status } = dose

  return (
    <div className="flex h-1.5 rounded-full overflow-hidden mt-2">
      {(['onset', 'comeup', 'peak', 'offset', 'afterglow'] as const).map((phase) => {
        const timingEnd =
          phase === 'onset'
            ? timings.onsetEnd
            : phase === 'comeup'
              ? timings.comeupEnd
              : phase === 'peak'
                ? timings.peakEnd
                : phase === 'offset'
                  ? timings.offsetEnd
                  : timings.afterglowEnd

        // Skip afterglow segment if there is none
        if (phase === 'afterglow' && timings.afterglowEnd <= timings.offsetEnd) return null

        const widthPct = Math.max(2, (timingEnd / timings.totalDuration) * 100)
        const colorEntry = phaseColors[phase]
        const past = isPhasePast(phase, status.phase)
        const current = phase === status.phase

        return (
          <div
            key={phase}
            className={`${colorEntry.bar} transition-all duration-500 ${
              past || current ? 'opacity-100' : 'opacity-30'
            }`}
            style={{ width: `${widthPct}%` }}
            role="meter"
            aria-label={`${phase} phase: ${past ? 'complete' : current ? 'active' : 'upcoming'}`}
          />
        )
      })}
    </div>
  )
}

/* ================================================================== */
/*  Dose breakdown item with colored dot + mini progress bar           */
/* ================================================================== */

function DoseBreakdownItem({
  dose,
  routeHex,
}: {
  dose: EnrichedDose
  routeHex: string
}) {
  const formatted = formatDoseAmount(dose.amount, dose.unit)
  const phaseColor = markerHex[dose.status.phase]
  const isActive = dose.status.phase !== 'not_started' && dose.status.phase !== 'ended'
  const doseProgress = dose.status.overallProgress

  return (
    <div className="flex items-center gap-2 py-1">
      {/* Phase-colored dot */}
      <span
        className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: phaseColor, opacity: isActive ? 1 : 0.4 }}
        aria-hidden="true"
      />

      {/* Dose amount + phase label */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs font-semibold text-foreground truncate">
            {formatted.amount}{formatted.unit}
          </span>
          <span className={`text-[10px] ${phaseColors[dose.status.phase].text}`}>
            {formatPhaseName(dose.status.phase)}
          </span>
        </div>

        {/* Mini progress bar */}
        {isActive && (
          <div className="mt-0.5 h-1 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${doseProgress}%`,
                backgroundColor: phaseColor,
              }}
              role="progressbar"
              aria-valuenow={Math.round(doseProgress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Dose progress: ${Math.round(doseProgress)}%`}
            />
          </div>
        )}
      </div>

      {/* Time badge */}
      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
        {format(dose.doseTime, 'h:mm')}
      </span>
    </div>
  )
}

/* ================================================================== */
/*  MobilePhaseBar — main export                                       */
/* ================================================================== */

export function MobilePhaseBar({ group, className = '' }: MobilePhaseBarProps) {
  /* ---- Derived state ---- */
  const primaryDose = group.primary
  const isLive = hasIncompletePhases(group)

  // Derive "now" from dose status (same time source as markers) to prevent drift
  const nowProgress = useMemo(() => {
    if (!isLive) return -1
    const activeDose = group.routes
      .flatMap(rg => rg.doses)
      .find(d => d.status.phase !== 'ended' && d.status.phase !== 'not_started')
    if (!activeDose) return -1
    const elapsedMins = activeDose.timings.totalDuration - activeDose.status.totalRemaining
    const doseOffsetMins = (activeDose.doseTime.getTime() - group.windowStart.getTime()) / 60_000
    return (doseOffsetMins + elapsedMins) / group.windowDuration * 100
  }, [isLive, group.routes, group.windowStart.getTime(), group.windowDuration])

  /* ---- Touch-to-inspect state ---- */
  const [touchInspect, setTouchInspect] = useState<TouchInspect | null>(null)

  const handleTouch = useCallback(
    (e: React.TouchEvent<SVGSVGElement>) => {
      if (!e.touches.length) return
      const svg = e.currentTarget
      const rect = svg.getBoundingClientRect()
      const touchX = e.touches[0].clientX - rect.left

      // Map touch X → progress 0–100
      const rawProgress =
        ((touchX - MOBILE_PL) / (MOBILE_SVG_W - MOBILE_PL - MOBILE_PR)) * 100

      if (rawProgress < 0 || rawProgress > 100) {
        setTouchInspect(null)
        return
      }

      // Find the best-matching dose for this progress position
      const { timings } = primaryDose
      const offsetMins =
        (primaryDose.doseTime.getTime() - group.windowStart.getTime()) / 60_000
      const globalMins = (rawProgress / 100) * group.windowDuration
      const localMins = globalMins - offsetMins
      const localProgress = (localMins / timings.totalDuration) * 100

      const clampedProgress = Math.max(0, Math.min(100, localProgress))
      const intensity = intensityAt(clampedProgress, timings)
      const phase = phaseNameAt(clampedProgress, timings)

      const absoluteDate = addMinutes(group.windowStart, globalMins)

      setTouchInspect({
        x: touchX,
        progress: rawProgress,
        phase,
        intensity,
        timeFromStart: formatMinutes(Math.round(localMins)),
        absoluteTime: format(absoluteDate, 'h:mm a'),
      })
    },
    [primaryDose, group],
  )

  const handleTouchEnd = useCallback(() => {
    setTouchInspect(null)
  }, [])

  /* ---- Build curve paths per route ---- */
  const routePaths = useMemo(() => {
    return group.routes.map((route) => {
      const offsetMins =
        (route.primary.doseTime.getTime() - group.windowStart.getTime()) / 60_000
      const { timings } = route.primary
      return {
        route,
        stroke: mobileCurvePath(timings, offsetMins, group.windowDuration),
        area: mobileAreaPath(timings, offsetMins, group.windowDuration),
        offsetMins,
      }
    })
  }, [group])

  /* ---- Active routes count for intensity display ---- */
  const activeRoutes = group.routes.filter((r) =>
    r.doses.some(
      (d) => d.status.phase !== 'not_started' && d.status.phase !== 'ended',
    ),
  )

  /* ---- Compute current combined intensity ---- */
  const currentIntensity = useMemo(() => {
    if (!isLive || nowProgress <= 0 || nowProgress >= 100) return null
    const intensities: number[] = []
    for (const route of group.routes) {
      for (const dose of route.doses) {
        const offsetMins =
          (dose.doseTime.getTime() - group.windowStart.getTime()) / 60_000
        const globalMins = (nowProgress / 100) * group.windowDuration
        const localMins = globalMins - offsetMins
        const localProgress = (localMins / dose.timings.totalDuration) * 100
        if (localProgress >= 0 && localProgress <= 100) {
          intensities.push(intensityAt(localProgress, dose.timings))
        }
      }
    }
    if (intensities.length === 0) return null
    return combinedIntensityAt(intensities)
  }, [isLive, nowProgress, group.routes])

  return (
    <div className={`${className}`}>
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-1 mb-1">
        <div>
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            {group.substanceName}
          </h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`inline-flex items-center gap-1 text-xs ${phaseColors[primaryDose.status.phase].text}`}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: markerHex[primaryDose.status.phase] }}
              />
              {formatPhaseName(primaryDose.status.phase)}
            </span>
            {isLive && primaryDose.status.totalRemaining > 0 && (
              <span className="text-xs text-muted-foreground">
                {formatMinutes(primaryDose.status.totalRemaining)} remaining
              </span>
            )}
            {currentIntensity !== null && (
              <span className="text-xs font-medium text-foreground/70">
                {currentIntensity}% intensity
              </span>
            )}
          </div>
        </div>
        {activeRoutes.length > 1 && (
          <span className="text-[10px] text-muted-foreground">
            {activeRoutes.length} active routes
          </span>
        )}
      </div>

      {/* ── Phase progress bar ── */}
      {isLive && <PhaseProgressBar dose={primaryDose} />}

      {/* ── SVG Graph ── */}
      <div className="relative mt-2">
        <svg
          viewBox={`0 0 ${MOBILE_SVG_W} ${MOBILE_SVG_H}`}
          className="w-full h-auto select-none"
          role="img"
          aria-label={`Intensity timeline for ${group.substanceName}`}
          onTouchStart={handleTouch}
          onTouchMove={handleTouch}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {/* Background fill for graph area */}
          <rect
            x={MOBILE_PL}
            y={MOBILE_PT}
            width={MOBILE_SVG_W - MOBILE_PL - MOBILE_PR}
            height={MOBILE_GH}
            fill="currentColor"
            className="text-muted/30"
            rx="4"
          />

          {/* Curve paths per route */}
          {routePaths.map(({ route, stroke, area }) => {
            const paletteEntry = ROUTE_PALETTE[group.routes.indexOf(route) % ROUTE_PALETTE.length]
            return (
              <g key={route.route}>
                <path
                  d={area}
                  fill={paletteEntry.fill}
                  opacity="0.08"
                />
                <path
                  d={stroke}
                  fill="none"
                  stroke={paletteEntry.stroke}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              </g>
            )
          })}

          {/* Now indicator */}
          {nowProgress >= 0 && nowProgress <= 100 && isLive && (
            <g>
              <line
                x1={toMobileX(nowProgress)}
                y1={MOBILE_PT - 4}
                x2={toMobileX(nowProgress)}
                y2={MOBILE_PT + MOBILE_GH}
                stroke={NOW_INDICATOR.color}
                strokeWidth={NOW_INDICATOR.strokeWidth * 0.75}
                strokeDasharray={NOW_INDICATOR.dashArray}
                opacity="0.7"
              />
              <circle
                cx={toMobileX(nowProgress)}
                cy={MOBILE_PT - 4}
                r={NOW_INDICATOR.dotRadius}
                fill={NOW_INDICATOR.color}
              >
                <animate
                  attributeName="opacity"
                  values="1;0.4;1"
                  dur={`${NOW_INDICATOR.pulseDurationMs}ms`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )}

          {/* Touch inspect crosshair */}
          {touchInspect && (
            <g>
              <line
                x1={toMobileX(touchInspect.progress)}
                y1={MOBILE_PT}
                x2={toMobileX(touchInspect.progress)}
                y2={MOBILE_PT + MOBILE_GH}
                stroke="#ffffff44"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <circle
                cx={toMobileX(touchInspect.progress)}
                cy={toMobileY(touchInspect.intensity)}
                r="4"
                fill="#fff"
                stroke={markerHex[touchInspect.phase as PhaseStatus['phase']] ?? '#a855f7'}
                strokeWidth="2"
              />
            </g>
          )}
        </svg>

        {/* ── Touch inspect tooltip card ── */}
        {touchInspect && (
          <div
            className="absolute left-2 right-2 -bottom-[5.5rem] rounded-lg border border-border bg-card p-2.5 shadow-lg z-10 animate-in fade-in slide-in-from-top-2 duration-200"
            role="tooltip"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-semibold"
                style={{
                  color: markerHex[touchInspect.phase as PhaseStatus['phase']] ?? '#a855f7',
                }}
              >
                {formatPhaseName(touchInspect.phase as PhaseStatus['phase'])}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {touchInspect.absoluteTime}
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">
                {Math.round(touchInspect.intensity)}%
              </span>
              <span className="text-[10px] text-muted-foreground">
                intensity · {touchInspect.timeFromStart} in
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Dose breakdown list ── */}
      <div className="mt-3 space-y-0.5">
        {group.routes.map((route) =>
          route.doses.map((dose) => (
            <DoseBreakdownItem
              key={`${route.route}-${dose.id ?? dose.doseTime.getTime()}`}
              dose={dose}
              routeHex={ROUTE_PALETTE[group.routes.indexOf(route) % ROUTE_PALETTE.length].stroke}
            />
          )),
        )}
      </div>
    </div>
  )
}
