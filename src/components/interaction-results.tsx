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
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
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
        <div className="p-4 rounded-2xl bg-muted/50 mb-4">
          <Shuffle className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Select Substances</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
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
        <div className="p-4 rounded-2xl bg-muted/50 mb-4 animate-pulse">
          <Shuffle className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-1">Analyzing interactions...</h3>
        <p className="text-sm text-muted-foreground">Checking all substance pairs</p>
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
        <p className="text-sm text-muted-foreground max-w-sm">
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
      {/* Summary Banner */}
      <div
        className={cn(
          'rounded-xl p-4 border',
          result.summary.dangerous > 0
            ? 'bg-red-500/10 border-red-500/30'
            : result.summary.unsafe > 0
              ? 'bg-orange-500/10 border-orange-500/30'
              : result.summary.caution > 0
                ? 'bg-amber-500/10 border-amber-500/30'
                : 'bg-emerald-500/10 border-emerald-500/30'
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
            <Badge variant="outline" className="bg-red-500/15 text-red-400 border-red-500/30 font-bold">
              {result.summary.dangerous} Dangerous
            </Badge>
          )}
          {result.summary.unsafe > 0 && (
            <Badge variant="outline" className="bg-orange-500/15 text-orange-400 border-orange-500/30 font-bold">
              {result.summary.unsafe} Unsafe
            </Badge>
          )}
          {result.summary.caution > 0 && (
            <Badge variant="outline" className="bg-amber-500/15 text-amber-400 border-amber-500/30 font-bold">
              {result.summary.caution} Caution
            </Badge>
          )}
          {result.summary.lowRisk > 0 && (
            <Badge variant="outline" className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 font-bold">
              {result.summary.lowRisk} Low Risk
            </Badge>
          )}
          <Badge variant="outline" className="text-muted-foreground">
            {result.summary.total} total
          </Badge>
        </div>
      </div>

      {/* Dangerous Interactions */}
      {dangerous.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="h-4 w-4 text-red-400" />
            <h4 className="text-sm font-semibold text-red-400">Dangerous Interactions</h4>
            <Badge variant="outline" className="text-[10px] bg-red-500/15 text-red-400 border-red-500/30">
              {dangerous.length}
            </Badge>
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
          {dangerous.length > 0 && <Separator className="my-4" />}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-orange-400" />
              <h4 className="text-sm font-semibold text-orange-400">Unsafe Interactions</h4>
              <Badge variant="outline" className="text-[10px] bg-orange-500/15 text-orange-400 border-orange-500/30">
                {unsafe.length}
              </Badge>
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
          {hasRisks && <Separator className="my-4" />}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="h-4 w-4 text-amber-400" />
              <h4 className="text-sm font-semibold text-amber-400">Use Caution</h4>
              <Badge variant="outline" className="text-[10px] bg-amber-500/15 text-amber-400 border-amber-500/30">
                {caution.length}
              </Badge>
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
          {(hasRisks || caution.length > 0) && <Separator className="my-4" />}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="h-4 w-4 text-emerald-400" />
              <h4 className="text-sm font-semibold text-emerald-400">Low Risk Combinations</h4>
              <Badge variant="outline" className="text-[10px] bg-emerald-500/15 text-emerald-400 border-emerald-500/30">
                {lowRisk.length}
              </Badge>
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
          <Separator className="my-4" />
          <section>
            <div className="flex items-center gap-2 mb-3">
              <ArrowRightLeft className="h-4 w-4 text-blue-400" />
              <h4 className="text-sm font-semibold text-blue-400">Cross-Tolerances</h4>
              <Badge variant="outline" className="text-[10px] bg-blue-500/15 text-blue-400 border-blue-500/30">
                {result.crossTolerances.length}
              </Badge>
            </div>
            <div className="space-y-2">
              {result.crossTolerances.map((ct, i) => (
                <Card key={`ct-${i}`} className="border-blue-500/20 bg-blue-500/5">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="font-medium text-xs capitalize">
                        {ct.tolerance}
                      </Badge>
                      <span className="text-xs text-muted-foreground">shared by</span>
                      {ct.substances.map((sub, j) => (
                        <span key={j} className="flex items-center gap-1">
                          {j > 0 && (
                            <span className="text-muted-foreground text-xs">&bull;</span>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {sub}
                          </Badge>
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Cross-tolerance means that tolerance to one substance may reduce the effects of
              another substance in the same class. This can lead to taking higher doses than
              intended.
            </p>
          </section>
        </>
      )}

      {/* Disclaimer */}
      <Separator className="my-4" />
      <Card className="border-yellow-500/20 bg-yellow-500/5">
        <CardContent className="p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold mb-1">Disclaimer</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Interaction data sourced from TripSit&apos;s community-maintained combos database
                and per-substance profiles. Absence of a known interaction does not guarantee
                safety. Always perform independent research and consult qualified healthcare
                professionals. In case of emergency, contact your local emergency services
                immediately.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
