import { DoseLog } from '@/types'

// ─── PHASE TIMINGS ────────────────────────────────────────────────────────────

export interface PhaseTimings {
  onsetEnd: number
  comeupEnd: number
  peakEnd: number
  offsetEnd: number
  totalDuration: number
}

// ─── PHASE STATUS ─────────────────────────────────────────────────────────────

export interface PhaseStatus {
  phase: 'not_started' | 'onset' | 'comeup' | 'peak' | 'offset' | 'ended'
  progress: number
  overallProgress: number
  timeInPhase: number
  timeRemaining: number
  totalRemaining: number
}

// ─── ENRICHED DOSE ────────────────────────────────────────────────────────────

export interface EnrichedDose extends DoseLog {
  timings: PhaseTimings
  status: PhaseStatus
  doseTime: Date
}

// ─── ROUTE GROUP ──────────────────────────────────────────────────────────────

/** All doses of a single (substance, route) pair. */
export interface RouteGroup {
  route: string
  doses: EnrichedDose[]
  primary: EnrichedDose       // the furthest-along active dose
  totalAmount: number
  unit: string
  uniformUnit: boolean
  paletteIndex: number        // which ROUTE_PALETTE entry to use
}

// ─── SUBSTANCE GROUP ──────────────────────────────────────────────────────────

/** One card per substance, containing 1-N RouteGroups. */
export interface SubstanceGroup {
  key: string                 // lowercased substance name
  substanceName: string
  categories: string[]
  routes: RouteGroup[]
  primary: EnrichedDose       // representative dose for phase badge, etc.
  /** Shared time window: max offsetEnd across all routes (in minutes) */
  windowDuration: number
  /** Earliest doseTime across all routes — x-axis origin */
  windowStart: Date
}

// ─── TOOLTIP ──────────────────────────────────────────────────────────────────

export interface TooltipData {
  phase: string
  phaseTime: string
  absoluteTime: Date
  intensity: number
  progress: number
}
