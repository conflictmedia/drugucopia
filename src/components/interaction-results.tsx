'use client'

import {
  ShieldAlert,
  AlertTriangle,
  HelpCircle,
  CheckCircle2,
  Shuffle,
  ArrowRightLeft,
  ThumbsUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { InteractionPairCard } from './interaction-pair-card'
import type { InteractionCheckResult } from '@/lib/interaction-checker'

interface InteractionResultsProps {
  result: InteractionCheckResult | null
  selectedCount: number
  isLoading?: boolean
}

export function InteractionResults({
  result,
  selectedCount,
  isLoading,
}: InteractionResultsProps) {
  if (selectedCount === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="p-4 rounded-2xl bg-base-200/50 mb-4">
          <Shuffle className="h-8 w-8 text-neutral-content" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Select Substances</h3>
        <p className="text-sm text-neutral-content max-w-sm">
          Choose one or more substances to check for interactions. Selecting a single substance
          will show all known interactions for it; selecting two or more will check pairwise
          combinations and cross-tolerances.
        </p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="p-4 rounded-2xl bg-base-200/50 mb-4 animate-pulse">
          <Shuffle className="h-8 w-8 text-neutral-content" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Analyzing interactions...</h3>
        <p className="text-sm text-neutral-content">Checking all substance pairs</p>
      </div>
    )
  }

  if (!result) return null

  if (result.summary.total === 0 && result.crossTolerances.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="p-4 rounded-2xl bg-green-500/10 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-lg font-semibold mb-1">No Known Interactions</h3>
        <p className="text-sm text-neutral-content max-w-sm">
          No documented interactions were found between the selected substances. This does
          not guarantee safety — always do your own research and consult professionals.
        </p>
      </div>
    )
  }

  const dangerous = result.pairs.filter((p) => p.severity === 'dangerous')
  const unsafe = result.pairs.filter((p) => p.severity === 'unsafe')
  const caution = result.pairs.filter((p) => p.severity === 'caution')
  const lowRisk = result.pairs.filter((p) => p.severity === 'low-risk')
  const hasRisks = dangerous.length > 0 || unsafe.length > 0

  return (
    <div className="space-y-6">
      {/* Summary Banner — neutral bg with colored left border so badges don't
          disappear into a matching-colored alert background (red-on-red, etc.) */}
      <div
        className={cn(
          'alert border-l-4',
          result.summary.dangerous > 0
            ? 'border-l-red-500 bg-red-500/5'
            : result.summary.unsafe > 0
              ? 'border-l-orange-500 bg-orange-500/5'
              : result.summary.caution > 0
                ? 'border-l-amber-500 bg-amber-500/5'
                : 'border-l-emerald-500 bg-emerald-500/5'
        )}
      >
        <div className="flex items-center gap-3 mb-3">
          {result.summary.dangerous > 0 ? (
            <ShieldAlert className="h-5 w-5 text-red-400" />
          ) : result.summary.unsafe > 0 ? (
            <AlertTriangle className="h-5 w-5 text-orange-400" />
          ) : result.summary.caution > 0 ? (
            <HelpCircle className="h-5 w-5 text-amber-400" />
          ) : (
            <ThumbsUp className="h-5 w-5 text-emerald-400" />
          )}
          <h3 className="font-semibold">Interaction Summary</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {result.summary.dangerous > 0 && (
            <span className="badge bg-red-500/25 text-red-200 border-red-500/40 font-bold">
              {result.summary.dangerous} Dangerous
            </span>
          )}
          {result.summary.unsafe > 0 && (
            <span className="badge bg-orange-500/25 text-orange-200 border-orange-500/40 font-bold">
              {result.summary.unsafe} Unsafe
            </span>
          )}
          {result.summary.caution > 0 && (
            <span className="badge bg-amber-500/25 text-amber-200 border-amber-500/40 font-bold">
              {result.summary.caution} Caution
            </span>
          )}
          {result.summary.lowRisk > 0 && (
            <span className="badge bg-emerald-500/25 text-emerald-200 border-emerald-500/40 font-bold">
              {result.summary.lowRisk} Low Risk
            </span>
          )}
          <span className="badge badge-outline text-base-content/60">
            {result.summary.total} total
          </span>
        </div>
      </div>

      {/* Dangerous Interactions */}
      {dangerous.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="h-4 w-4 text-red-400" />
            <h4 className="text-sm font-semibold text-red-400">Dangerous Interactions</h4>
            <span className="badge text-[10px] bg-red-500/25 text-red-200 border-red-500/45">
              {dangerous.length}
            </span>
          </div>
          <div className="space-y-3">
            {dangerous.map((pair, i) => (
              <InteractionPairCard key={`dangerous-${i}`} result={pair} />
            ))}
          </div>
        </section>
      )}

      {/* Unsafe Interactions */}
      {unsafe.length > 0 && (
        <>
          {dangerous.length > 0 && <div className="divider" />}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-orange-400" />
              <h4 className="text-sm font-semibold text-orange-400">Unsafe Interactions</h4>
              <span className="badge text-[10px] bg-orange-500/25 text-orange-200 border-orange-500/45">
                {unsafe.length}
              </span>
            </div>
            <div className="space-y-3">
              {unsafe.map((pair, i) => (
                <InteractionPairCard key={`unsafe-${i}`} result={pair} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Caution Interactions */}
      {caution.length > 0 && (
        <>
          {hasRisks && <div className="divider" />}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="h-4 w-4 text-amber-400" />
              <h4 className="text-sm font-semibold text-amber-400">Use Caution</h4>
              <span className="badge text-[10px] bg-amber-500/25 text-amber-200 border-amber-500/45">
                {caution.length}
              </span>
            </div>
            <div className="space-y-3">
              {caution.map((pair, i) => (
                <InteractionPairCard key={`caution-${i}`} result={pair} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Low Risk Interactions (synergies, decreases, no synergy) */}
      {lowRisk.length > 0 && (
        <>
          {(hasRisks || caution.length > 0) && <div className="divider" />}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="h-4 w-4 text-emerald-400" />
              <h4 className="text-sm font-semibold text-emerald-400">Low Risk Combinations</h4>
              <span className="badge text-[10px] bg-emerald-500/25 text-emerald-200 border-emerald-500/45">
                {lowRisk.length}
              </span>
            </div>
            <div className="space-y-3">
              {lowRisk.map((pair, i) => (
                <InteractionPairCard key={`lowrisk-${i}`} result={pair} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Cross-Tolerances */}
      {result.crossTolerances.length > 0 && (
        <>
          <div className="divider" />
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ArrowRightLeft className="h-4 w-4 text-blue-400" />
              <h4 className="text-sm font-semibold text-blue-400">Cross-Tolerances</h4>
              <span className="badge text-[10px] bg-blue-500/25 text-blue-200 border-blue-500/45">
                {result.crossTolerances.length}
              </span>
            </div>
            <div className="space-y-2">
              {result.crossTolerances.map((ct, i) => (
                <div key={`ct-${i}`} className="card border-blue-500/20 bg-blue-500/3">
                  <div className="card-body p-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="badge badge-secondary font-medium text-xs capitalize">
                        {ct.tolerance}
                      </span>
                      <span className="text-xs text-neutral-content">shared by</span>
                      {ct.substances.map((sub, j) => (
                        <span key={j} className="flex items-center gap-1">
                          {j > 0 && (
                            <span className="text-neutral-content text-xs">&bull;</span>
                          )}
                          <span className="badge badge-outline text-xs">
                            {sub}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-content mt-2 leading-relaxed">
              Cross-tolerance means that tolerance to one substance may reduce the effects of
              another substance in the same class. This can lead to taking higher doses than
              intended.
            </p>
          </section>
        </>
      )}

      {/* Disclaimer */}
      <div className="divider" />
      <div className="alert alert-warning">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <div>
          <h3 className="font-bold text-xs">Disclaimer</h3>
          <p className="text-[11px] leading-relaxed">
            Interaction data sourced from TripSit&apos;s community-maintained combos database
            and per-substance profiles. Absence of a known interaction does not guarantee
            safety. Always perform independent research and consult qualified healthcare
            professionals. In case of emergency, contact your local emergency services
            immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
