/**
 * Dose classification and scaling utilities.
 *
 * Converts a raw dose amount + unit into:
 *   - A dose class (threshold / light / common / strong / heavy)
 *   - A horizontal weight (0–1) used to interpolate duration ranges
 *   - A height relative to the average common dose
 *
 * Design follows the PsychonautWiki Journal model:
 *   • Height  = userDose / avgCommonDose          (linear dose-response)
 *   • Weight  = numDots / 4                       (drives duration interpolation)
 *   • Peak & offset durations scale with weight; onset & comeup stay at midpoint
 */

import type { Substance, RouteDosageDuration } from './types'

// ─── Types ────────────────────────────────────────────────────────────────────

export type DoseClass = 'threshold' | 'light' | 'common' | 'strong' | 'heavy'

export interface DoseClassification {
  doseClass: DoseClass
  /** 0–1 used to interpolate min/max duration ranges */
  horizontalWeight: number
  /** userDose / avgCommonDose (linear) */
  heightRelativeToCommon: number
  /** The numeric midpoint of the common dose range (in the dose's own unit) */
  averageCommonDose: number
}

// ─── Dose parsing helpers ────────────────────────────────────────────────────

/**
 * Parse a dose string like "75-150µg", "20mg", "300µg" into a numeric value.
 * Strips unit suffix and any range (takes the first number in a range).
 */
function parseDoseValue(raw: string, defaultUnit: string): number | null {
  if (!raw || raw === 'Unknown') return null
  const trimmed = raw.trim()
  // Range pattern: "75-150µg" or "20 - 80 mg"
  const rangeMatch = trimmed.match(/([\d.]+)\s*[-–]\s*([\d.]+)/)
  // Single value: "20mg", "0.4 mg"
  const singleMatch = trimmed.match(/^([\d.]+)\s*/)

  const numStr = rangeMatch ? rangeMatch[1] : singleMatch ? singleMatch[1] : null
  if (numStr === null) return null

  const value = parseFloat(numStr)
  if (isNaN(value) || value <= 0) return null
  return value
}

/**
 * Try to parse a dose string and return it in the given unit.
 * Handles µg → mg conversion when needed.
 */
function parseDoseToNumber(raw: string, targetUnit: string): number | null {
  const value = parseDoseValue(raw, targetUnit)
  if (value === null) return null

  const lower = raw.toLowerCase().trim()
  const sourceUnit = lower.replace(/[\d.\s–-]/g, '').trim()

  // If no unit suffix found in raw string, assume it's already in targetUnit
  if (!sourceUnit) return value

  // Normalize unit strings
  const unitMap: Record<string, string> = {
    'µg': 'µg', 'ug': 'µg', 'mcg': 'µg', 'microgram': 'µg',
    'mg': 'mg', 'milligram': 'mg',
    'g': 'g', 'gram': 'g',
    'ml': 'ml', 'mL': 'ml',
    'l': 'l', 'liter': 'l',
  }
  const normalizedSource = unitMap[sourceUnit] || sourceUnit
  const normalizedTarget = unitMap[targetUnit] || targetUnit

  // Convert µg → mg when target is mg
  if (normalizedSource === 'µg' && normalizedTarget === 'mg') {
    return value / 1000
  }
  // Convert mg → µg when target is µg
  if (normalizedSource === 'mg' && normalizedTarget === 'µg') {
    return value * 1000
  }
  // Convert g → mg
  if (normalizedSource === 'g' && normalizedTarget === 'mg') {
    return value * 1000
  }
  // Convert mg → g
  if (normalizedSource === 'mg' && normalizedTarget === 'g') {
    return value / 1000
  }

  return value
}

// ─── Core classification ────────────────────────────────────────────────────

/**
 * Get dose thresholds (numeric) for a route from substance data.
 * Returns null for any threshold that can't be parsed.
 */
function getThresholds(
  routeData: RouteDosageDuration,
  substanceUnit: string
): {
  threshold: number | null
  lightMin: number | null
  commonMin: number | null
  strongMin: number | null
  heavyMin: number | null
} {
  const d = routeData.dosage
  return {
    threshold: parseDoseToNumber(d.threshold, substanceUnit),
    lightMin: parseDoseToNumber(d.light, substanceUnit),
    commonMin: parseDoseToNumber(d.common, substanceUnit),
    strongMin: parseDoseToNumber(d.strong, substanceUnit),
    heavyMin: parseDoseToNumber(d.heavy, substanceUnit),
  }
}

/**
 * Classify a dose and compute height/weight.
 *
 * @param amount  - The numeric dose amount (e.g. 150)
 * @param unit    - The dose unit (e.g. "µg")
 * @param substance - The substance data (used to look up route thresholds)
 * @param route   - The administration route key (e.g. "sublingual", "oral")
 * @returns A DoseClassification, or null if classification is impossible
 */
export function classifyDose(
  amount: number,
  unit: string,
  substance: Substance,
  route: string
): DoseClassification | null {
  if (!substance.routeData || amount <= 0) return null

  // Find matching route (try exact, then normalize)
  let routeKey: string | undefined = route
  if (!substance.routeData[route]) {
    const normalized = route.toLowerCase().trim()
    routeKey = Object.keys(substance.routeData).find(
      k => k.toLowerCase() === normalized
    )
  }
  const routeData = routeKey ? substance.routeData[routeKey] : null
  if (!routeData) return null

  // Parse thresholds into the dose's unit
  const substanceUnit = substance.defaultUnit || unit
  const thresholds = getThresholds(routeData, substanceUnit)

  // If units don't match, try parsing into the user's unit instead
  const doseUnit = unit.toLowerCase()
  const subUnit = substanceUnit.toLowerCase()
  let thresholdsInDoseUnit = thresholds
  if (doseUnit !== subUnit) {
    thresholdsInDoseUnit = getThresholds(routeData, unit)
  }

  const t = thresholdsInDoseUnit

  // Classify dose
  let doseClass: DoseClass = 'common'
  if (t.lightMin !== null && t.commonMin !== null && t.strongMin !== null && t.heavyMin !== null) {
    if (amount < t.lightMin) doseClass = 'threshold'
    else if (amount < t.commonMin) doseClass = 'light'
    else if (amount < t.strongMin) doseClass = 'common'
    else if (amount < t.heavyMin) doseClass = 'strong'
    else doseClass = 'heavy'
  }

  // Compute average common dose: midpoint of common range = (commonMin + strongMin) / 2
  const averageCommonDose =
    t.commonMin !== null && t.strongMin !== null
      ? (t.commonMin + t.strongMin) / 2
      : amount // fallback: use the dose itself as reference

  // Height = dose / avgCommonDose (linear, clamped to reasonable range)
  const heightRelativeToCommon =
    averageCommonDose > 0
      ? Math.min(Math.max(amount / averageCommonDose, 0.1), 5)
      : 1

  // Horizontal weight from dose class → numDots / 4
  let numDots: number
  switch (doseClass) {
    case 'threshold': numDots = 0; break
    case 'light': numDots = 1; break
    case 'common': numDots = 2; break
    case 'strong': numDots = 3; break
    case 'heavy': {
      // Scale beyond 4 dots for very heavy doses
      const heavyMin = t.heavyMin ?? t.strongMin ?? amount
      if (heavyMin > 0) {
        const timesHeavy = Math.floor(amount / heavyMin)
        const remainder = amount % heavyMin
        numDots = timesHeavy * 4 + Math.min(Math.floor((remainder / heavyMin) * 4), 3)
      } else {
        numDots = 4
      }
      break
    }
  }
  const horizontalWeight = Math.min(numDots / 4, 1)

  return {
    doseClass,
    horizontalWeight,
    heightRelativeToCommon,
    averageCommonDose,
  }
}
