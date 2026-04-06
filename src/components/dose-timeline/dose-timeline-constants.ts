import {
  Clock, Zap, TrendingUp, Mountain, TrendingDown, Sunrise, Sparkles,
} from 'lucide-react'
import { PhaseStatus, PhaseBand } from './dose-timeline-types'

/* ================================================================== */
/*  Phase UI Metadata                                                  */
/* ================================================================== */

export const phaseColors = {
  not_started: { bg: 'bg-slate-500',  text: 'text-slate-400',  fill: 'bg-slate-500/20',  border: 'border-slate-500/30',  bar: 'bg-slate-400' },
  onset:       { bg: 'bg-blue-500',   text: 'text-blue-400',   fill: 'bg-blue-500/20',   border: 'border-blue-500/30',  bar: 'bg-blue-500' },
  comeup:      { bg: 'bg-amber-500',  text: 'text-amber-400',  fill: 'bg-amber-500/20',  border: 'border-amber-500/30', bar: 'bg-amber-500' },
  peak:        { bg: 'bg-purple-500', text: 'text-purple-400', fill: 'bg-purple-500/20', border: 'border-purple-500/30', bar: 'bg-purple-500' },
  offset:      { bg: 'bg-cyan-500',   text: 'text-cyan-400',   fill: 'bg-cyan-500/20',   border: 'border-cyan-500/30',  bar: 'bg-cyan-500' },
  afterglow:   { bg: 'bg-indigo-500', text: 'text-indigo-400', fill: 'bg-indigo-500/20', border: 'border-indigo-500/30', bar: 'bg-indigo-400' },
  ended:       { bg: 'bg-gray-500',   text: 'text-gray-400',   fill: 'bg-gray-500/20',   border: 'border-gray-500/30',  bar: 'bg-gray-400' },
} as const

export const markerHex: Record<PhaseStatus['phase'], string> = {
  not_started: '#94a3b8',
  onset:       '#3b82f6',
  comeup:      '#f59e0b',
  peak:        '#a855f7',
  offset:      '#06b6d4',
  afterglow:   '#6366f1',
  ended:       '#9ca3af',
}

export const phaseIcons = {
  not_started: Sunrise,
  onset:       Zap,
  comeup:      TrendingUp,
  peak:        Mountain,
  offset:      TrendingDown,
  afterglow:   Sparkles,
  ended:       Clock,
}

export const phaseDescriptions: Record<PhaseStatus['phase'], string> = {
  not_started: 'Effects have not yet begun',
  onset:       'Initial effects are beginning to be felt',
  comeup:      'Effects are rapidly increasing in intensity',
  peak:        'Maximum effects are being experienced',
  offset:      'Effects are gradually declining',
  afterglow:   'Residual after-effects lingering after the main experience',
  ended:       'The primary experience has ended',
}

/* ================================================================== */
/*  Route Color Palette                                                */
/* ================================================================== */

export const ROUTE_PALETTE = [
  { stroke: '#a855f7', fill: '#a855f7' },
  { stroke: '#22d3ee', fill: '#22d3ee' },
  { stroke: '#fb923c', fill: '#fb923c' },
  { stroke: '#4ade80', fill: '#4ade80' },
  { stroke: '#f472b6', fill: '#f472b6' },
  { stroke: '#facc15', fill: '#facc15' },
] as const

/* ================================================================== */
/*  Desktop SVG Dimensions & Padding                                   */
/* ================================================================== */

export const SVG_W = 900
export const SVG_H = 280
export const PL = 48   // left padding — wider for time labels
export const PR = 20   // right padding
export const PT = 28   // top padding — room for intensity labels
export const PB = 104  // bottom padding — room for time axis + multi-dose labels
export const GW = SVG_W - PL - PR
export const GH = SVG_H - PT - PB

/* ================================================================== */
/*  Mobile SVG Dimensions & Padding                                    */
/* ================================================================== */

export const MOBILE_SVG_W = 440
export const MOBILE_SVG_H = 170
export const MOBILE_PL = 36
export const MOBILE_PR = 16
export const MOBILE_PT = 22
export const MOBILE_PB = 30
export const MOBILE_GW = MOBILE_SVG_W - MOBILE_PL - MOBILE_PR
export const MOBILE_GH = MOBILE_SVG_H - MOBILE_PT - MOBILE_PB

/* ================================================================== */
/*  Phase Order & Mobile Phase Bar                                     */
/* ================================================================== */

export const PHASE_ORDER = ['onset', 'comeup', 'peak', 'offset', 'afterglow'] as const

export const MOBILE_PHASES = [
  { key: 'onset',     label: 'Onset',     barColor: 'bg-blue-500' },
  { key: 'comeup',    label: 'Comeup',    barColor: 'bg-amber-500' },
  { key: 'peak',      label: 'Peak',      barColor: 'bg-purple-500' },
  { key: 'offset',    label: 'Offset',    barColor: 'bg-cyan-500' },
  { key: 'afterglow', label: 'Afterglow', barColor: 'bg-indigo-500' },
] as const

/* ================================================================== */
/*  Phase Bands (background regions with gradient info)                */
/* ================================================================== */

export const PHASE_BANDS: readonly PhaseBand[] = [
  {
    name:            'Onset',
    fill:            '#3b82f6',
    labelColor:      '#60a5fa',
    gradientTop:     'rgba(59,130,246,0.18)',
    gradientBottom:  'rgba(59,130,246,0.04)',
    phase:           'onset',
  },
  {
    name:            'Comeup',
    fill:            '#f59e0b',
    labelColor:      '#fbbf24',
    gradientTop:     'rgba(245,158,11,0.18)',
    gradientBottom:  'rgba(245,158,11,0.04)',
    phase:           'comeup',
  },
  {
    name:            'Peak',
    fill:            '#a855f7',
    labelColor:      '#c084fc',
    gradientTop:     'rgba(168,85,247,0.18)',
    gradientBottom:  'rgba(168,85,247,0.04)',
    phase:           'peak',
  },
  {
    name:            'Offset',
    fill:            '#06b6d4',
    labelColor:      '#22d3ee',
    gradientTop:     'rgba(6,182,212,0.18)',
    gradientBottom:  'rgba(6,182,212,0.04)',
    phase:           'offset',
  },
  {
    name:            'After',
    fill:            '#6366f1',
    labelColor:      '#818cf8',
    gradientTop:     'rgba(99,102,241,0.15)',
    gradientBottom:  'rgba(99,102,241,0.03)',
    phase:           'afterglow',
  },
] as const

export const PHASE_GRADIENT_STOPS: Record<string, readonly [string, string]> = {
  onset:     ['rgba(59,130,246,0.22)',  'rgba(59,130,246,0.03)'],
  comeup:    ['rgba(245,158,11,0.22)',  'rgba(245,158,11,0.03)'],
  peak:      ['rgba(168,85,247,0.22)',  'rgba(168,85,247,0.03)'],
  offset:    ['rgba(6,182,212,0.22)',   'rgba(6,182,212,0.03)'],
  afterglow: ['rgba(99,102,241,0.18)',   'rgba(99,102,241,0.03)'],
}

/* ================================================================== */
/*  Now Indicator Config                                               */
/* ================================================================== */

export const NOW_INDICATOR = {
  /** Main stroke color for the "now" vertical line */
  color: '#f43f5e',
  /** Color for the pulsing ring at the top of the indicator */
  pulseColor: '#fb7185',
  /** Stroke width in px */
  strokeWidth: 2,
  /** Pulse animation duration in ms (CSS animation) */
  pulseDurationMs: 2000,
  /** Dot radius at the top of the now-line */
  dotRadius: 4,
  /** Dashed-line pattern for the now-line (SVG stroke-dasharray) */
  dashArray: '6 4',
} as const

export const CURVE_SAMPLES = 80

export const ENDED_DOSE_RETENTION_MINS = 720
