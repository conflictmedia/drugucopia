// Interaction Checker Engine
// Checks drug-drug interactions between selected substances using
// the TripSit combos database (primary) and per-substance interaction data (fallback).

import { substances, getSubstanceById } from '@/lib/substances/index';
import { tripsitLookup } from '@/lib/tripsit-combos';
import { resolveTripsitClasses } from '@/lib/tripsit-aliases';
import type { Substance, TripSitCombo } from '@/lib/types';

// ─── TYPES ──────────────────────────────────────────────────────────────────

export type InteractionSeverity =
  | 'dangerous'
  | 'unsafe'
  | 'caution'
  | 'low-risk'

export interface InteractionResult {
  substanceA: string;
  substanceB: string;
  severity: InteractionSeverity;
  matchedTerms: string[];
  sources: string[];            // 'tripsit' | 'substance-a' | 'substance-b'
  description?: string;
  tripsitStatus?: string;       // Original TripSit status e.g. "Low Risk & Synergy"
  tripsitSources?: TripSitCombo['sources']; // Academic sources from TripSit
}

export interface CrossToleranceResult {
  tolerance: string;
  substances: string[];
}

export interface InteractionCheckResult {
  pairs: InteractionResult[];
  crossTolerances: CrossToleranceResult[];
  summary: {
    dangerous: number;
    unsafe: number;
    caution: number;
    lowRisk: number;
    total: number;
  };
}

// ─── TRIPSIT STATUS MAPPING ────────────────────────────────────────────────

function mapTripsitStatus(status: string): InteractionSeverity {
  switch (status) {
    case 'Dangerous': return 'dangerous'
    case 'Unsafe': return 'unsafe'
    case 'Caution': return 'caution'
    default: return 'low-risk' // Low Risk & Synergy, Low Risk & No Synergy, Low Risk & Decrease
  }
}

// ─── HELPERS ────────────────────────────────────────────────────────────────

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSubstanceKeywords(sub: Substance): string[] {
  return [
    sub.name,
    sub.class,
    ...(sub.categories || []),
    ...(sub.commonNames || []),
    ...(sub.aliases || []),
  ]
    .filter(Boolean)
    .map((s: string) => s.toLowerCase())
    .filter((s: string) => s !== 'other' && s.length > 1);
}

function matchInteractionList(
  interactionList: string[],
  keywords: string[]
): string | null {
  for (const interactionStr of interactionList) {
    const interactionLower = interactionStr.toLowerCase();
    for (const keyword of keywords) {
      try {
        if (keyword.length > 2) {
          const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i');
          if (regex.test(interactionLower)) return interactionStr;
        } else {
          if (interactionLower.includes(keyword)) return interactionStr;
        }
      } catch {
        // skip
      }
    }
  }
  return null;
}

function resolveSubstance(id: string): Substance | undefined {
  return getSubstanceById(id) ?? substances.find(
    (s) => s.name.toLowerCase() === id.toLowerCase()
  );
}

function consolidatePairs(pairs: InteractionResult[]): InteractionResult[] {
  // Key by substance pair only (no severity) — TripSit always wins for a pair.
  // If TripSit has an entry for a pair, all fallback results for that pair are dropped.
  const pairMap = new Map<string, InteractionResult>();
  const tripsitPairs = new Set<string>();

  // First pass: collect TripSit results (they're authoritative)
  for (const pair of pairs) {
    const names = [pair.substanceA, pair.substanceB].sort();
    const key = `${names[0]}|${names[1]}`;
    if (pair.sources.includes('tripsit')) {
      pairMap.set(key, { ...pair });
      tripsitPairs.add(key);
    }
  }

  // Second pass: add fallback results only for pairs NOT covered by TripSit
  for (const pair of pairs) {
    const names = [pair.substanceA, pair.substanceB].sort();
    const key = `${names[0]}|${names[1]}`;
    if (pair.sources.includes('tripsit')) continue; // already handled
    if (tripsitPairs.has(key)) continue; // TripSit covers this pair — skip fallback

    const existing = pairMap.get(key);
    if (existing) {
      // Merge matched terms from fallback
      for (const term of pair.matchedTerms) {
        if (!existing.matchedTerms.includes(term)) existing.matchedTerms.push(term);
      }
    } else {
      pairMap.set(key, { ...pair });
    }
  }

  return Array.from(pairMap.values());
}

// ─── TRIPSIT COMBO LOOKUP ───────────────────────────────────────────────────

/**
 * Check TripSit combo database for interactions between selected substances.
 * Uses the alias map to resolve individual substance IDs to TripSit class names.
 */
function checkTripSitCombos(selectedSubs: Substance[]): InteractionResult[] {
  const results: InteractionResult[] = [];
  if (selectedSubs.length < 2) return results;

  // Build a map: substance → TripSit classes it belongs to
  const subTripsitClasses = new Map<string, string[]>();
  for (const sub of selectedSubs) {
    const classes = resolveTripsitClasses(sub.id);
    // Also try the substance name itself as a potential TripSit key
    const nameLower = sub.name.toLowerCase()
    if (!classes.includes(nameLower)) classes.push(nameLower)
    subTripsitClasses.set(sub.id, classes);
  }

  // For each pair, check all combinations of TripSit classes
  for (let i = 0; i < selectedSubs.length; i++) {
    for (let j = i + 1; j < selectedSubs.length; j++) {
      const subA = selectedSubs[i];
      const subB = selectedSubs[j];
      const classesA = subTripsitClasses.get(subA.id) || [];
      const classesB = subTripsitClasses.get(subB.id) || [];

      let found = false;
      for (const classA of classesA) {
        for (const classB of classesB) {
          const key = [classA, classB].sort().join('|');
          const combo = tripsitLookup[key];
          if (combo) {
            results.push({
              substanceA: subA.name,
              substanceB: subB.name,
              severity: mapTripsitStatus(combo.status),
              matchedTerms: [combo.status],
              sources: ['tripsit'],
              description: combo.note || undefined,
              tripsitStatus: combo.status,
              tripsitSources: combo.sources.length > 0 ? combo.sources : undefined,
            });
            found = true;
            break;
          }
        }
        if (found) break;
      }
    }
  }

  return results;
}

// ─── PER-SUBSTANCE INTERACTION CHECKING (fallback) ─────────────────────────

function checkPerSubstanceInteractions(selectedSubs: Substance[]): InteractionResult[] {
  const results: InteractionResult[] = [];

  for (let i = 0; i < selectedSubs.length; i++) {
    for (let j = i + 1; j < selectedSubs.length; j++) {
      const subA = selectedSubs[i];
      const subB = selectedSubs[j];
      const kwA = getSubstanceKeywords(subA);
      const kwB = getSubstanceKeywords(subB);

      // Map old "uncertain" to new "caution"
      const severityChecks: Array<{ key: string; severity: InteractionSeverity }> = [
        { key: 'dangerous', severity: 'dangerous' },
        { key: 'unsafe', severity: 'unsafe' },
        { key: 'uncertain', severity: 'caution' },
      ];

      for (const { key, severity } of severityChecks) {
        // Forward: A's interactions vs B's keywords
        const interactionListA = subA.interactions[key] || [];
        const matchA = matchInteractionList(interactionListA, kwB);
        if (matchA) {
          results.push({
            substanceA: subA.name,
            substanceB: subB.name,
            severity,
            matchedTerms: [matchA],
            sources: ['substance-a'],
          });
        }

        // Reverse: B's interactions vs A's keywords
        const interactionListB = subB.interactions[key] || [];
        const matchB = matchInteractionList(interactionListB, kwA);
        if (matchB) {
          results.push({
            substanceA: subA.name,
            substanceB: subB.name,
            severity,
            matchedTerms: [matchB],
            sources: ['substance-b'],
          });
        }
      }
    }
  }

  return results;
}

// ─── MAIN CHECK FUNCTION ───────────────────────────────────────────────────

/**
 * Check interactions between a list of substance IDs.
 * Returns all interaction pairs, cross-tolerances, and a summary.
 *
 * Data sources (in priority order):
 *  1. TripSit combos database — 841 pairs with notes and academic sources
 *  2. Per-substance interaction strings — fallback for substances not in TripSit
 */
export function checkInteractions(substanceIds: string[]): InteractionCheckResult {
  const crossToleranceMap = new Map<string, string[]>();

  const resolvedSubs = substanceIds
    .map((id) => resolveSubstance(id))
    .filter(Boolean) as Substance[];

  if (resolvedSubs.length < 2) {
    return {
      pairs: [],
      crossTolerances: [],
      summary: { dangerous: 0, unsafe: 0, caution: 0, lowRisk: 0, total: 0 },
    };
  }

  // ── 1. TripSit combo database (primary, authoritative) ──
  const tripsitResults = checkTripSitCombos(resolvedSubs);

  // ── 2. Per-substance interaction data (fallback) ──
  const perSubstanceResults = checkPerSubstanceInteractions(resolvedSubs);

  // ── 3. Cross-tolerance analysis ──
  for (const sub of resolvedSubs) {
    for (const tolerance of sub.interactions.crossTolerances || []) {
      const tolLower = tolerance.toLowerCase();
      if (!crossToleranceMap.has(tolLower)) {
        crossToleranceMap.set(tolLower, []);
      }
      const list = crossToleranceMap.get(tolLower)!;
      if (!list.includes(sub.name)) {
        list.push(sub.name);
      }
    }
  }

  const crossTolerances: CrossToleranceResult[] = [];
  for (const [tolerance, subs] of crossToleranceMap) {
    if (subs.length >= 2) {
      crossTolerances.push({ tolerance, substances: subs });
    }
  }

  // ── 4. Consolidate (TripSit takes priority) and sort ──
  const allPairs = [...tripsitResults, ...perSubstanceResults];
  const consolidatedPairs = consolidatePairs(allPairs);

  const severityOrder: Record<InteractionSeverity, number> = {
    dangerous: 0,
    unsafe: 1,
    caution: 2,
    'low-risk': 3,
  };

  consolidatedPairs.sort((a, b) => {
    const severityDiff = severityOrder[a.severity] - severityOrder[b.severity];
    if (severityDiff !== 0) return severityDiff;
    // Within same severity, prefer TripSit results
    const aTripsit = a.sources.includes('tripsit') ? 0 : 1;
    const bTripsit = b.sources.includes('tripsit') ? 0 : 1;
    if (aTripsit !== bTripsit) return aTripsit - bTripsit;
    return a.substanceA.localeCompare(b.substanceA);
  });

  // ── 5. Summary ──
  const summary = {
    dangerous: consolidatedPairs.filter((p) => p.severity === 'dangerous').length,
    unsafe: consolidatedPairs.filter((p) => p.severity === 'unsafe').length,
    caution: consolidatedPairs.filter((p) => p.severity === 'caution').length,
    lowRisk: consolidatedPairs.filter((p) => p.severity === 'low-risk').length,
    total: consolidatedPairs.length,
  };

  return {
    pairs: consolidatedPairs,
    crossTolerances: crossTolerances.sort((a, b) => a.tolerance.localeCompare(b.tolerance)),
    summary,
  };
}

/**
 * Quick check: get all interactions for a single substance
 * (useful for the substance detail view).
 */
export function getSubstanceInteractions(
  substanceId: string
): { dangerous: string[]; unsafe: string[]; uncertain: string[]; crossTolerances: string[] } {
  const sub = resolveSubstance(substanceId);
  if (!sub) return { dangerous: [], unsafe: [], uncertain: [], crossTolerances: [] };
  return {
    dangerous: sub.interactions.dangerous || [],
    unsafe: sub.interactions.unsafe || [],
    uncertain: sub.interactions.uncertain || [],
    crossTolerances: sub.interactions.crossTolerances || [],
  };
}
