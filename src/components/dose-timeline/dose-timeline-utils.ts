import { format, addMinutes } from 'date-fns'
import { Duration, DoseLog } from '@/types'
import {
  PhaseTimings,
  PhaseStatus,
  PhaseName,
  TimeMarker,
  PhaseBandRange,
  CombinedIntensityPoint,
} from './dose-timeline-types'
import {
  PL, GW, PT, GH,
  MOBILE_PL, MOBILE_GW, MOBILE_PT, MOBILE_GH,
  CURVE_SAMPLES,
} from './dose-timeline-constants'

/* ================================================================== */
/*  Utility helpers                                                    */
/* ================================================================== */

/** Clamp a number between min and max (inclusive) */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function sigmoid(x: number, k: number): number {
  return 1 / (1 + Math.exp(-k * (x - 0.5)))
}

export function parseDurationToMinutes(durationStr: string): number {
  if (!durationStr) return 0

  const lower = durationStr.toLowerCase()
  // Normalize Unicode en-dash (–) and em-dash (—) to hyphen
  const normalized = lower.replace(/[\u2013\u2014]/g, '-')

  // Range pattern: "1-2 hours", "30-60min", "5-10 seconds"
  const rangeMatch = normalized.match(
    /([\d.]+)\s*[-–]\s*([\d.]+)\s*(minutes?|hours?|min|h|hr|m|seconds?|sec|s)s?/
  )
  if (rangeMatch) {
    const lo = parseFloat(rangeMatch[1])
    const hi = parseFloat(rangeMatch[2])
    const avg = (lo + hi) / 2
    const unit = rangeMatch[3]
    if (unit.startsWith('s') || unit === 'sec') return avg / 60
    return unit.startsWith('h') || unit === 'hr' ? avg * 60 : avg
  }

  // Single value pattern: "1.5 hours", "90min", "45 min", "30 seconds", "10s"
  const singleMatch = normalized.match(
    /([\d.]+)\s*(minutes?|hours?|min|h|hr|m|seconds?|sec|s)s?/
  )
  if (singleMatch) {
    const value = parseFloat(singleMatch[1])
    const unit = singleMatch[2]
    if (unit.startsWith('s') || unit === 'sec') return value / 60
    return unit.startsWith('h') || unit === 'hr' ? value * 60 : value
  }

  return 0
}

export function calculatePhaseTimings(duration: Duration): PhaseTimings {
  const onsetMins      = parseDurationToMinutes(duration.onset)
  const comeupMins     = parseDurationToMinutes(duration.comeup)
  const peakMins       = parseDurationToMinutes(duration.peak)
  const offsetMins     = parseDurationToMinutes(duration.offset)
  const afterglowMins  = parseDurationToMinutes((duration as Duration & { afterglow?: string }).afterglow ?? '')
  const totalMins      = parseDurationToMinutes(duration.total)

  // Full data provided — use as-is
  if (onsetMins > 0 && comeupMins > 0 && peakMins > 0 && offsetMins > 0) {
    return buildTimings(onsetMins, comeupMins, peakMins, offsetMins, afterglowMins, totalMins)
  }

  // Only total provided (no individual phases) — estimate all phases from total
  // This covers very short durations (seconds) and minimal data entry.
  if (totalMins > 0 && onsetMins === 0 && comeupMins === 0 && peakMins === 0 && offsetMins === 0) {
    // For very short durations (< 2 min), treat as quick rise + brief peak + fast decline
    // For longer durations, use standard PK ratios
    const isShort = totalMins < 2
    const estOnset  = isShort ? Math.max(Math.round(totalMins * 0.05), 0.01) : Math.round(totalMins * 0.08)
    const estComeup = isShort ? Math.max(Math.round(totalMins * 0.25), 0.01) : Math.round(totalMins * 0.17)
    const estPeak   = isShort ? Math.max(Math.round(totalMins * 0.50), 0.01) : Math.round(totalMins * 0.38)
    const estOffset = totalMins - estOnset - estComeup - estPeak
    return buildTimings(estOnset, estComeup, estPeak, Math.max(estOffset, 0.01), afterglowMins, totalMins)
  }

  // Only onset + total — distribute remaining using PK ratios
  if (onsetMins > 0 && totalMins > 0 && comeupMins === 0 && peakMins === 0 && offsetMins === 0) {
    const remaining = totalMins - onsetMins
    const estComeup = Math.round(remaining * 0.20)
    const estPeak   = Math.round(remaining * 0.45)
    const estOffset = remaining - estComeup - estPeak
    return buildTimings(onsetMins, estComeup, estPeak, estOffset, afterglowMins, totalMins)
  }

  // Partial data: onset + comeup known, peak + offset missing
  if (onsetMins > 0 && comeupMins > 0 && peakMins === 0 && offsetMins === 0) {
    if (totalMins > 0) {
      const usedSoFar = onsetMins + comeupMins
      const remaining = totalMins - usedSoFar
      const estPeak   = Math.round(remaining * (45 / 80))
      const estOffset = remaining - estPeak
      return buildTimings(onsetMins, comeupMins, estPeak, estOffset, afterglowMins, totalMins)
    }
    const estPeak   = Math.round(comeupMins * 1.8)
    const estOffset = Math.round(comeupMins * 1.4)
    return buildTimings(onsetMins, comeupMins, estPeak, estOffset, afterglowMins)
  }

  // Partial data: onset + comeup + peak known, offset missing
  if (onsetMins > 0 && comeupMins > 0 && peakMins > 0 && offsetMins === 0) {
    const estOffset = totalMins > 0
      ? totalMins - onsetMins - comeupMins - peakMins
      : Math.round(peakMins * 1.2)
    return buildTimings(onsetMins, comeupMins, peakMins, Math.max(estOffset, 0), afterglowMins, totalMins)
  }

  // Fallback: use whatever we have
  return buildTimings(onsetMins, comeupMins, peakMins, offsetMins, afterglowMins, totalMins)
}

function buildTimings(
  onset: number,
  comeup: number,
  peak: number,
  offset: number,
  afterglow: number,
  total?: number,
): PhaseTimings {
  // Calculate the sum of individual phases
  const phaseSum = onset + comeup + peak + offset
  
  // If total is provided and is shorter than the sum of phases,
  // scale all phases proportionally to fit within total
  // This handles inconsistent substance data where phases sum > total
  let finalOnset = onset
  let finalComeup = comeup
  let finalPeak = peak
  let finalOffset = offset
  
  if (total && total > 0 && total < phaseSum) {
    const scale = total / phaseSum
    finalOnset = Math.max(onset * scale, 0.01)
    finalComeup = Math.max(comeup * scale, 0.01)
    finalPeak = Math.max(peak * scale, 0.01)
    finalOffset = Math.max(offset * scale, 0.01)
  }
  
  const onsetEnd      = finalOnset
  const comeupEnd     = onsetEnd + finalComeup
  const peakEnd       = comeupEnd + finalPeak
  const offsetEnd     = peakEnd + finalOffset
  const afterglowEnd  = afterglow > 0 ? offsetEnd + afterglow : offsetEnd
  
  // Timeline ends at offsetEnd (which now respects the total if it was shorter)
  const totalDuration = offsetEnd
  
  return { onsetEnd, comeupEnd, peakEnd, offsetEnd, afterglowEnd, totalDuration, afterglowDuration: afterglow }
}

/* ================================================================== */
/*  Phase Status                                                       */
/* ================================================================== */

export function getPhaseStatus(doseTime: Date, timings: PhaseTimings): PhaseStatus {
  const elapsed = (Date.now() - doseTime.getTime()) / 60_000

  if (elapsed < 0) {
    return {
      phase: 'not_started',
      progress: 0,
      overallProgress: 0,
      timeInPhase: 0,
      timeRemaining: -elapsed,
      totalRemaining: timings.totalDuration,
    }
  }

  // Timeline ends when offset phase ends (not afterglow)
  if (elapsed >= timings.offsetEnd) {
    return {
      phase: 'ended',
      progress: 100,
      overallProgress: 100,
      timeInPhase: 0,
      timeRemaining: 0,
      totalRemaining: 0,
    }
  }

  const overall = (elapsed / timings.totalDuration) * 100
  const phases: { name: PhaseStatus['phase']; start: number; end: number }[] = [
    { name: 'onset',     start: 0,                end: timings.onsetEnd  },
    { name: 'comeup',    start: timings.onsetEnd,  end: timings.comeupEnd },
    { name: 'peak',      start: timings.comeupEnd, end: timings.peakEnd   },
    { name: 'offset',    start: timings.peakEnd,   end: timings.offsetEnd },
  ]

  for (const p of phases) {
    if (elapsed < p.end || p.name === 'offset') {
      const dur     = Math.max(p.end - p.start, 1)
      const inPhase = elapsed - p.start
      return {
        phase: p.name,
        progress: Math.min(100, (inPhase / dur) * 100),
        overallProgress: overall,
        timeInPhase: inPhase,
        timeRemaining: dur - inPhase,
        totalRemaining: timings.totalDuration - elapsed,
      }
    }
  }

  // Should not reach here, but provide a safe fallback
  return {
    phase: 'onset',
    progress: 0,
    overallProgress: overall,
    timeInPhase: elapsed,
    timeRemaining: timings.onsetEnd - elapsed,
    totalRemaining: timings.totalDuration - elapsed,
  }
}

export function formatMinutes(minutes: number, approximate = false): string {
  if (minutes < 0) return '0m'
  if (minutes < 1) return '<1m'

  const prefix = approximate ? '~' : ''

  if (minutes < 60) {
    return `${prefix}${Math.round(minutes)}m`
  }

  const h = Math.floor(minutes / 60)
  const m = Math.round(minutes % 60)
  return m === 0 ? `${prefix}${h}h` : `${prefix}${h}h ${m}m`
}

export function formatPhaseName(phase: PhaseStatus['phase']): string {
  if (phase === 'not_started') return 'Upcoming'
  return phase.charAt(0).toUpperCase() + phase.slice(1)
}

export function getDoseCategories(dose: DoseLog): string[] {
  if (Array.isArray(dose.categories)) return dose.categories
  const legacy = (dose as Record<string, unknown>).category as string | undefined
  if (legacy && legacy !== 'unknown') return [legacy]
  return []
}

export function intensityAt(progress: number, t: PhaseTimings): number {
  if (progress <= 0) return 0
  if (progress >= 100) return 0

  const mins = (progress / 100) * t.totalDuration

  /* ---- Onset: flat zero (no subjective effects yet) ---- */
  if (mins <= t.onsetEnd) {
    return 0
  }

  /* ---- Comeup: smooth sigmoid rise 0% → 100% ---- */
  if (mins <= t.comeupEnd) {
    const comeupDuration = Math.max(t.comeupEnd - t.onsetEnd, 1)
    const frac = (mins - t.onsetEnd) / comeupDuration
    const k = 8
    const sig0 = 1 / (1 + Math.exp(k * 0.5))   // sigmoid at f=0
    const sig1 = 1 / (1 + Math.exp(-k * 0.5))  // sigmoid at f=1
    const range = sig1 - sig0
    const sig = (sigmoid(frac, k) - sig0) / range  // normalized 0→1
    return clamp(100 * sig, 0, 100)
  }

  /* ---- Peak: perfectly flat at 100% ---- */
  if (mins <= t.peakEnd) {
    return 100
  }

  /* ---- Offset: bi-exponential clearance (α distribution + β elimination) ---- */
  if (mins <= t.offsetEnd) {
    const postPeakMins   = mins - t.peakEnd
    const offsetDuration = Math.max(t.offsetEnd - t.peakEnd, 1)

    const A     = 80                        // distribution component amplitude
    const B     = 20                        // elimination component amplitude
    const alpha = 18 / offsetDuration       // fast distribution rate constant
    const beta  = 3.5 / offsetDuration      // slow elimination rate constant

    return clamp(
      A * Math.exp(-alpha * postPeakMins) + B * Math.exp(-beta * postPeakMins),
      0, 100
    )
  }

  /* ---- Afterglow: 0% (offset has already decayed to ~0) ---- */
  if (mins <= t.afterglowEnd) {
    return 0
  }

  /* ---- Safety fallback: no phase matched (shouldn't happen with valid timings) ---- */
  return 0
}

/* ================================================================== */
/*  Phase Queries                                                      */
/* ================================================================== */

export function phaseNameAt(progress: number, t: PhaseTimings): PhaseName {
  const mins = (progress / 100) * t.totalDuration
  if (mins <= t.onsetEnd)  return 'onset'
  if (mins <= t.comeupEnd) return 'comeup'
  if (mins <= t.peakEnd)   return 'peak'
  return 'offset'  // Timeline ends at offset, no afterglow phase
}

export function phaseEnd(key: string, t: PhaseTimings): number {
  if (key === 'onset')     return t.onsetEnd
  if (key === 'comeup')    return t.comeupEnd
  if (key === 'peak')      return t.peakEnd
  if (key === 'offset')    return t.offsetEnd
  if (key === 'afterglow') return t.afterglowEnd
  return t.afterglowEnd
}

export function phaseStart(key: string, t: PhaseTimings): number {
  if (key === 'onset')     return 0
  if (key === 'comeup')    return t.onsetEnd
  if (key === 'peak')      return t.comeupEnd
  if (key === 'offset')    return t.peakEnd
  if (key === 'afterglow') return t.offsetEnd
  return t.offsetEnd
}

export function isPhasePast(check: string, current: string): boolean {
  const order: string[] = ['onset', 'comeup', 'peak', 'offset']
  return order.indexOf(check) < order.indexOf(current)
}

/* ================================================================== */
/*  Duration Range Parsing & Dose-Dependent Scaling                    */
/* ================================================================== */

/** Parse a duration string into { min, max } in minutes. */
export function parseDurationRange(durationStr: string): { min: number; max: number } | null {
  if (!durationStr) return null

  const lower = durationStr.toLowerCase().replace(/[\u2013\u2014]/g, '-')

  const rangeMatch = lower.match(
    /([\d.]+)\s*[-–]\s*([\d.]+)\s*(minutes?|hours?|min|h|hr|m|seconds?|sec|s)s?/
  )
  if (rangeMatch) {
    const lo = parseFloat(rangeMatch[1])
    const hi = parseFloat(rangeMatch[2])
    const unit = rangeMatch[3]
    const toMins = (v: number) => {
      if (unit.startsWith('s') || unit === 'sec') return v / 60
      return unit.startsWith('h') || unit === 'hr' ? v * 60 : v
    }
    return { min: toMins(lo), max: toMins(hi) }
  }

  const singleMatch = lower.match(
    /([\d.]+)\s*(minutes?|hours?|min|h|hr|m|seconds?|sec|s)s?/
  )
  if (singleMatch) {
    const value = parseFloat(singleMatch[1])
    const unit = singleMatch[2]
    const toMins = (v: number) => {
      if (unit.startsWith('s') || unit === 'sec') return v / 60
      return unit.startsWith('h') || unit === 'hr' ? v * 60 : v
    }
    const mins = toMins(value)
    // Treat single values as a narrow range ±10%
    return { min: mins * 0.9, max: mins * 1.1 }
  }

  return null
}

/** Interpolate between min and max at a given weight (0–1). */
function interpolateRange(min: number, max: number, weight: number): number {
  return min + (max - min) * weight
}

/**
 * Calculate dose-scaled phase timings.
 *
 * Uses the total duration as the anchor timeline length. Each phase's range
 * is interpreted as a proportion of the total, then scaled to fit within the
 * total. This prevents unrealistic timelines where offset starts too early
 * (e.g., LSD offset at 5hr when total is 8-12hr).
 *
 * For dose scaling: the total range is interpolated by horizontalWeight
 * (heavier doses → longer total), and each phase is scaled proportionally.
 * Onset and comeup always use the midpoint of their range.
 */
export function calculateDoseScaledTimings(
  duration: Duration,
  horizontalWeight: number = 0.5,
): PhaseTimings {
  // Parse all phase ranges
  const onsetRange = parseDurationRange(duration.onset)
  const comeupRange = parseDurationRange(duration.comeup)
  const peakRange = parseDurationRange(duration.peak)
  const offsetRange = parseDurationRange(duration.offset)
  const totalRange = parseDurationRange(duration.total)

  // If we don't have a total range, fall back to the standard calculation
  if (!totalRange || totalRange.min <= 0) {
    return calculatePhaseTimings(duration)
  }

  // Use the total range as the anchor — heavier doses get longer timelines
  const totalMins = interpolateRange(totalRange.min, totalRange.max, horizontalWeight)

  // Calculate each phase's midpoint duration (in minutes)
  const onsetMins = onsetRange
    ? interpolateRange(onsetRange.min, onsetRange.max, 0.5)
    : parseDurationToMinutes(duration.onset)

  const comeupMins = comeupRange
    ? interpolateRange(comeupRange.min, comeupRange.max, 0.5)
    : parseDurationToMinutes(duration.comeup)

  const peakMins = peakRange
    ? interpolateRange(peakRange.min, peakRange.max, 0.5)
    : parseDurationToMinutes(duration.peak)

  const offsetMins = offsetRange
    ? interpolateRange(offsetRange.min, offsetRange.max, 0.5)
    : parseDurationToMinutes(duration.offset)

  // Require at least onset + comeup + peak + offset to distribute
  if (onsetMins <= 0 || comeupMins <= 0 || peakMins <= 0 || offsetMins <= 0) {
    return calculatePhaseTimings(duration)
  }

  // Calculate the proportional share of each phase relative to their sum
  const phaseSum = onsetMins + comeupMins + peakMins + offsetMins

  // Scale each phase so they sum to totalMins
  const finalOnset  = Math.max(onsetMins * (totalMins / phaseSum), 0.01)
  const finalComeup = Math.max(comeupMins * (totalMins / phaseSum), 0.01)
  const finalPeak   = Math.max(peakMins * (totalMins / phaseSum), 0.01)
  const finalOffset = Math.max(offsetMins * (totalMins / phaseSum), 0.01)

  // Afterglow (if present) is parsed separately — not scaled into the main timeline
  const afterglowStr = (duration as Duration & { afterglow?: string }).afterglow ?? ''
  const afterglowMins = parseDurationToMinutes(afterglowStr)

  return buildTimings(finalOnset, finalComeup, finalPeak, finalOffset, afterglowMins)
}

/* ================================================================== */
/*  Coordinate Transforms                                              */
/* ================================================================== */

export const toX       = (progress: number) => PL + (progress / 100) * GW
export const toY       = (intensity: number) => PT + GH - (intensity / 100) * GH
export const toMobileX = (progress: number) => MOBILE_PL + (progress / 100) * MOBILE_GW
export const toMobileY = (intensity: number) => MOBILE_PT + MOBILE_GH - (intensity / 100) * MOBILE_GH


interface Point2D {
  x: number
  y: number
}

function catmullRomToCubicBezier(pts: Point2D[], clampScreenY?: number): string {
  if (pts.length < 2) {
    return pts.length === 1
      ? `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`
      : ''
  }

  // Reflect a point across an anchor for tangent calculation at boundaries
  const reflect = (anchor: Point2D, point: Point2D): Point2D => ({
    x: 2 * anchor.x - point.x,
    y: 2 * anchor.y - point.y,
  })

  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`

  for (let i = 0; i < pts.length - 1; i++) {
    // Four points for Catmull-Rom: P0, P1, P2, P3
    const p0 = i === 0 ? reflect(pts[0], pts[1]) : pts[i - 1]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = i + 2 < pts.length ? pts[i + 2] : reflect(pts[pts.length - 1], pts[pts.length - 2])

    // Convert to cubic Bézier control points (tension = 1 for standard Catmull-Rom)
    let cp1x = p1.x + (p2.x - p0.x) / 6
    let cp1y = p1.y + (p2.y - p0.y) / 6
    let cp2x = p2.x - (p3.x - p1.x) / 6
    let cp2y = p2.y - (p3.y - p1.y) / 6

    // Clamp control-point y to prevent overshoot above the peak line.
    // In SVG the y-axis is inverted (y increases downward), so a control
    // point with y < clampScreenY would render ABOVE the peak boundary.
    // Clamping it preserves C1 continuity in x while eliminating the bump.
    if (clampScreenY != null) {
      cp1y = Math.max(cp1y, clampScreenY)
      cp2y = Math.max(cp2y, clampScreenY)
    }

    d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`
  }

  return d
}

export function curvePath(
  t: PhaseTimings,
  offsetMins: number,
  windowDuration: number,
): string {
  const pts: Point2D[] = []

  for (let i = 0; i <= CURVE_SAMPLES; i++) {
    const localProgress  = (i / CURVE_SAMPLES) * 100
    const localMins      = (localProgress / 100) * t.totalDuration
    const globalMins     = offsetMins + localMins
    const globalProgress = (globalMins / windowDuration) * 100

    // Fade in/out at the very start and end to ensure smooth 0 anchoring
    let intensity = intensityAt(localProgress, t)
    if (localProgress < 2) {
      intensity *= localProgress / 2
    } else if (localProgress > 98) {
      intensity *= (100 - localProgress) / 2
    }

    pts.push({
      x: toX(globalProgress),
      y: toY(clamp(intensity, 0, 100)),
    })
  }

  // Build the path in segments to avoid Catmull-Rom undershoot at the peak.
  // The peak phase should be a flat line at y=PT (100% intensity).
  // Catmull-Rom smoothing at the comeup→peak transition pulls the curve
  // below 100%, so we split the points into smoothed and flat-peak segments.
  const peakY = PT
  const segments: { pts: Point2D[]; smooth: boolean }[] = []
  let currentSeg: Point2D[] = [pts[0]]
  let segSmooth = true

  for (let i = 1; i < pts.length; i++) {
    const isFlatPeak = pts[i].y <= peakY + 0.5 && pts[i - 1].y <= peakY + 0.5

    if (isFlatPeak && segSmooth) {
      // Transition from smoothed to flat peak — flush the smoothed segment
      segments.push({ pts: currentSeg, smooth: true })
      currentSeg = [pts[i - 1], pts[i]]  // overlap for continuity
      segSmooth = false
    } else if (!isFlatPeak && !segSmooth) {
      // Transition from flat peak back to smoothed (offset) — flush flat segment
      segments.push({ pts: currentSeg, smooth: false })
      currentSeg = [pts[i - 1], pts[i]]  // overlap for continuity
      segSmooth = true
    } else {
      currentSeg.push(pts[i])
    }
  }
  segments.push({ pts: currentSeg, smooth: segSmooth })

  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`

  for (let s = 0; s < segments.length; s++) {
    const seg = segments[s]
    if (seg.pts.length < 2) continue

    if (!seg.smooth) {
      // Flat peak: straight lineTo for each point — guarantees y=PT exactly
      for (let i = 1; i < seg.pts.length; i++) {
        d += ` L ${seg.pts[i].x.toFixed(2)},${seg.pts[i].y.toFixed(2)}`
      }
    } else {
      // Smoothed (onset/comeup/offset): Catmull-Rom with overshoot clamping
      const smoothPts = seg.pts
      // Skip the first point (already in path from previous segment)
      for (let i = 0; i < smoothPts.length - 1; i++) {
        const p0 = i === 0 ? smoothPts[0] : smoothPts[i - 1]
        const p1 = smoothPts[i]
        const p2 = smoothPts[i + 1]
        const p3 = i + 2 < smoothPts.length ? smoothPts[i + 2] : smoothPts[smoothPts.length - 1]

        let cp1x = p1.x + (p2.x - p0.x) / 6
        let cp1y = p1.y + (p2.y - p0.y) / 6
        let cp2x = p2.x - (p3.x - p1.x) / 6
        let cp2y = p2.y - (p3.y - p1.y) / 6

        if (cp1y < peakY) cp1y = peakY
        if (cp2y < peakY) cp2y = peakY

        d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`
      }
    }
  }

  return d
}

/**
 * Build an SVG area path (desktop) — the curve closed to the baseline.
 */
export function areaPath(
  t: PhaseTimings,
  offsetMins: number,
  windowDuration: number,
): string {
  const curve  = curvePath(t, offsetMins, windowDuration)
  const startX = toX((offsetMins / windowDuration) * 100).toFixed(2)
  const endX   = toX(((offsetMins + t.totalDuration) / windowDuration) * 100).toFixed(2)
  const baseY  = (PT + GH).toFixed(2)
  return `${curve} L ${endX},${baseY} L ${startX},${baseY} Z`
}

/**
 * Build an SVG path for the intensity curve (mobile).
 */
export function mobileCurvePath(
  t: PhaseTimings,
  offsetMins: number,
  windowDuration: number,
): string {
  const pts: Point2D[] = []

  for (let i = 0; i <= CURVE_SAMPLES; i++) {
    const localProgress  = (i / CURVE_SAMPLES) * 100
    const localMins      = (localProgress / 100) * t.totalDuration
    const globalMins     = offsetMins + localMins
    const globalProgress = (globalMins / windowDuration) * 100

    let intensity = intensityAt(localProgress, t)
    if (localProgress < 2) {
      intensity *= localProgress / 2
    } else if (localProgress > 98) {
      intensity *= (100 - localProgress) / 2
    }

    pts.push({
      x: toMobileX(globalProgress),
      y: toMobileY(clamp(intensity, 0, 100)),
    })
  }

  // Same segment-based approach as desktop curvePath:
  // flat lineTo for peak, Catmull-Rom for comeup/offset
  const peakY = MOBILE_PT
  const segments: { pts: Point2D[]; smooth: boolean }[] = []
  let currentSeg: Point2D[] = [pts[0]]
  let segSmooth = true

  for (let i = 1; i < pts.length; i++) {
    const isFlatPeak = pts[i].y <= peakY + 0.5 && pts[i - 1].y <= peakY + 0.5

    if (isFlatPeak && segSmooth) {
      segments.push({ pts: currentSeg, smooth: true })
      currentSeg = [pts[i - 1], pts[i]]
      segSmooth = false
    } else if (!isFlatPeak && !segSmooth) {
      segments.push({ pts: currentSeg, smooth: false })
      currentSeg = [pts[i - 1], pts[i]]
      segSmooth = true
    } else {
      currentSeg.push(pts[i])
    }
  }
  segments.push({ pts: currentSeg, smooth: segSmooth })

  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`

  for (let s = 0; s < segments.length; s++) {
    const seg = segments[s]
    if (seg.pts.length < 2) continue

    if (!seg.smooth) {
      for (let i = 1; i < seg.pts.length; i++) {
        d += ` L ${seg.pts[i].x.toFixed(2)},${seg.pts[i].y.toFixed(2)}`
      }
    } else {
      const smoothPts = seg.pts
      for (let i = 0; i < smoothPts.length - 1; i++) {
        const p0 = i === 0 ? smoothPts[0] : smoothPts[i - 1]
        const p1 = smoothPts[i]
        const p2 = smoothPts[i + 1]
        const p3 = i + 2 < smoothPts.length ? smoothPts[i + 2] : smoothPts[smoothPts.length - 1]

        let cp1x = p1.x + (p2.x - p0.x) / 6
        let cp1y = p1.y + (p2.y - p0.y) / 6
        let cp2x = p2.x - (p3.x - p1.x) / 6
        let cp2y = p2.y - (p3.y - p1.y) / 6

        if (cp1y < peakY) cp1y = peakY
        if (cp2y < peakY) cp2y = peakY

        d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`
      }
    }
  }

  return d
}

/**
 * Build an SVG area path (mobile).
 */
export function mobileAreaPath(
  t: PhaseTimings,
  offsetMins: number,
  windowDuration: number,
): string {
  const curve  = mobileCurvePath(t, offsetMins, windowDuration)
  const startX = toMobileX((offsetMins / windowDuration) * 100).toFixed(2)
  const endX   = toMobileX(((offsetMins + t.totalDuration) / windowDuration) * 100).toFixed(2)
  const baseY  = (MOBILE_PT + MOBILE_GH).toFixed(2)
  return `${curve} L ${endX},${baseY} L ${startX},${baseY} Z`
}

export function buildTimeMarkers(windowDuration: number, windowStart: Date): TimeMarker[] {
  const hours = windowDuration / 60
  let stepMinutes: number

  if (hours < 3)       stepMinutes = 15
  else if (hours <= 8)  stepMinutes = 30
  else if (hours <= 16) stepMinutes = 60
  else                  stepMinutes = 120

  const marks: TimeMarker[] = []

  // Start at the first tick that falls within or just past windowStart
  // Align to clock boundaries (e.g., 15-min marks)
  const startDate = new Date(windowStart)
  const startMinute = startDate.getMinutes()

  // Round up to the next step boundary
  let offset = 0
  if (startMinute % stepMinutes !== 0) {
    offset = stepMinutes - (startMinute % stepMinutes)
  }

  for (let m = offset; m <= windowDuration; m += stepMinutes) {
    const progress = (m / windowDuration) * 100
    if (progress > 100.5) break

    const tickDate = addMinutes(windowStart, m)
    const label = format(tickDate, 'h:mm a')   // e.g. "3:45 PM"

    marks.push({
      progress: Math.min(progress, 100),
      label,
      date: tickDate,
    })
  }

  return marks
}

export function getPhaseBandRanges(t: PhaseTimings): PhaseBandRange[] {
  const total = Math.max(t.totalDuration, 1)
  // Afterglow is shown as a badge only, not in timeline
  return [
    { startFrac: 0,                     endFrac: t.onsetEnd  / total, phase: 'onset'  },
    { startFrac: t.onsetEnd  / total,   endFrac: t.comeupEnd / total, phase: 'comeup' },
    { startFrac: t.comeupEnd / total,   endFrac: t.peakEnd   / total, phase: 'peak'   },
    { startFrac: t.peakEnd   / total,   endFrac: t.offsetEnd / total, phase: 'offset' },
  ]
}

export function combinedIntensityAt(intensities: number[]): number {
  if (intensities.length === 0) return 0
  if (intensities.length === 1) return clamp(intensities[0], 0, 100)

  // Additive stacking with soft ceiling.
  // Purely additive (sum) reflects the reality that redosing adds intensity.
  // A soft ceiling via log dampening prevents unrealistic visual stacking
  // beyond ~1.5x a single-dose peak.
  const rawSum = intensities.reduce((acc, i) => acc + clamp(i, 0, 100), 0)

  // Apply soft ceiling: logarithmic dampening above 100
  // At 100: output = 100 (no change)
  // At 150: output = 100 + 22 = 122
  // At 200: output = 100 + 39 = 139
  if (rawSum <= 100) return rawSum
  return clamp(100 + 50 * Math.log(rawSum / 100), 0, 200)
}


export function getNowProgress(windowStart: Date, windowDuration: number): number {
  const now = Date.now()
  const windowStartMs = windowStart.getTime()
  const windowEndMs   = windowStartMs + windowDuration * 60_000
  const elapsed       = now - windowStartMs

  if (elapsed <= 0) return 0
  if (now >= windowEndMs) return 100

  return clamp((elapsed / (windowDuration * 60_000)) * 100, 0, 100)
}

export function buildCombinedIntensityCurve(
  routes: { doses: { timings: PhaseTimings; doseHeight?: number; doseOffsetMins?: number }[] }[],
  windowDuration: number,
): CombinedIntensityPoint[] {
  const points: CombinedIntensityPoint[] = []

  // Find the normalization factor: the tallest combined peak across all samples.
  // This is computed in two passes — first pass finds the max, second applies it.
  const rawPoints: { minutes: number; intensity: number; progress: number }[] = []

  for (let i = 0; i <= CURVE_SAMPLES; i++) {
    const progress = (i / CURVE_SAMPLES) * 100
    const minutes  = (progress / 100) * windowDuration
    const individualIntensities: number[] = []

    for (const route of routes) {
      for (const dose of route.doses) {
        const doseOffsetMins = dose.doseOffsetMins ?? 0
        const doseTotalMins  = dose.timings.totalDuration
        const localProgress = ((minutes - doseOffsetMins) / doseTotalMins) * 100

        if (localProgress >= 0 && localProgress <= 100) {
          const rawIntensity = intensityAt(localProgress, dose.timings)
          // Scale by dose height (relative to common dose)
          const height = dose.doseHeight ?? 1
          individualIntensities.push(rawIntensity * height)
        }
      }
    }

    rawPoints.push({
      minutes,
      intensity: combinedIntensityAt(individualIntensities),
      progress,
    })
  }

  // Normalize so the tallest combined peak fills the graph height (100)
  const maxIntensity = rawPoints.reduce((max, p) => Math.max(max, p.intensity), 0)
  const normalizer = maxIntensity > 0 ? 100 / maxIntensity : 1

  return rawPoints.map(p => ({
    ...p,
    intensity: p.intensity * normalizer,
  }))
}
