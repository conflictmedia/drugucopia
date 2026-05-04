'use client'

import { useState, useCallback, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Shuffle,
  AlertTriangle,
  Zap,
  Users,
} from 'lucide-react'
import { InteractionSubstanceSelector } from '@/components/interaction-substance-selector'
import { InteractionResults } from '@/components/interaction-results'
import { checkInteractions, checkSingleSubstanceInteractions } from '@/lib/interaction-checker'
import type { InteractionCheckResult } from '@/lib/interaction-checker'

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function InteractionsPage() {
  return (
    <Suspense>
      <InteractionsPageInner />
    </Suspense>
  )
}

function InteractionsPageInner() {
  const searchParams = useSearchParams()

  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [result, setResult] = useState<InteractionCheckResult | null>(null)

  // Load substances from URL params on mount
  useEffect(() => {
    const subsParam = searchParams.get('substances')
    if (subsParam) {
      const ids = subsParam
        .split(',')
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
      if (ids.length > 0) {
        setSelectedIds(ids)
      }
    }
  }, [searchParams])

  // Run interaction check whenever selection changes (with debounce-like behavior)
  useEffect(() => {
    if (selectedIds.length === 0) {
      setResult(null)
      return
    }

    const timer = setTimeout(() => {
      if (selectedIds.length === 1) {
        const checkResult = checkSingleSubstanceInteractions(selectedIds[0])
        setResult(checkResult)
      } else {
        const checkResult = checkInteractions(selectedIds)
        setResult(checkResult)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [selectedIds])

  const handleSelectionChange = useCallback((ids: string[]) => {
    setSelectedIds(ids)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Desktop Content ── */}
      <div className="hidden md:block container mx-auto py-6 lg:py-10 max-w-5xl">
        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
              <Shuffle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Interaction Checker</h2>
              <p className="text-neutral-content mt-1">
                Check for drug interactions. Select one substance to see all known
                interactions, or select two or more to check pairwise combinations
                and cross-tolerance information.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Two-column layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left: Selector */}
          <div className="col-span-4">
            <div className="sticky top-20 card card-transparent p-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-base-content">Substances</h3>
              </div>
              <InteractionSubstanceSelector
                selectedIds={selectedIds}
                onSelectionChange={handleSelectionChange}
              />

              {/* Quick-add popular combos */}
              <div className="mt-6">
                <p className="text-xs text-neutral-content mb-2 font-medium">Quick check:</p>
                <div className="flex flex-wrap gap-1.5">
                  <QuickCombo
                    label="Alcohol + MDMA"
                    ids={['alcohol', 'mdma']}
                    onClick={handleSelectionChange}
                  />
                  <QuickCombo
                    label="Alcohol + Benzos"
                    ids={['alcohol', 'diazepam']}
                    onClick={handleSelectionChange}
                  />
                  <QuickCombo
                    label="Cocaine + Alcohol"
                    ids={['cocaine', 'alcohol']}
                    onClick={handleSelectionChange}
                  />
                  <QuickCombo
                    label="Ketamine + Cocaine"
                    ids={['ketamine', 'cocaine']}
                    onClick={handleSelectionChange}
                  />
                  <QuickCombo
                    label="LSD + Cannabis"
                    ids={['lsd', 'cannabis']}
                    onClick={handleSelectionChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="col-span-8">
            <InteractionResults
              result={result}
              selectedCount={selectedIds.length}
            />
          </div>
        </div>
      </div>

      {/* ── Mobile Content ── */}
      <div className="md:hidden flex-1 overflow-y-auto pb-8">
        {/* Hero */}
        <div className="px-4 pt-4 pb-3 border-b border-white/8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10">
              <Shuffle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold gradient-text">Interaction Checker</h2>
              <p className="text-xs text-neutral-content mt-0.5">
                Check interactions for one or more substances
              </p>
            </div>
          </div>
        </div>

        {/* Selector */}
        <section className="px-4 py-4 border-b border-white/8">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">Substances</h3>
          </div>
          <InteractionSubstanceSelector
            selectedIds={selectedIds}
            onSelectionChange={handleSelectionChange}
          />

          {/* Quick combos */}
          <div className="mt-4">
            <p className="text-xs text-neutral-content mb-2 font-medium">Quick check:</p>
            <div className="flex flex-wrap gap-1.5">
              <QuickCombo
                label="Alcohol + MDMA"
                ids={['alcohol', 'mdma']}
                onClick={handleSelectionChange}
              />
              <QuickCombo
                label="Alcohol + Benzos"
                ids={['alcohol', 'diazepam']}
                onClick={handleSelectionChange}
              />
              <QuickCombo
                label="LSD + Cannabis"
                ids={['lsd', 'cannabis']}
                onClick={handleSelectionChange}
              />
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-4 py-4">
          <InteractionResults
            result={result}
            selectedCount={selectedIds.length}
          />
        </section>
      </div>
    </div>
  )
}

// ─── QUICK COMBO BUTTON ─────────────────────────────────────────────────────

function QuickCombo({
  label,
  ids,
  onClick,
}: {
  label: string
  ids: string[]
  onClick: (ids: string[]) => void
}) {
  return (
    <button
      onClick={() => onClick(ids)}
      className="btn btn-sm btn-ghost border border-white/10 hover:border-primary/30 gap-1 text-xs text-neutral-content hover:text-base-content card-lift"
    >
      <Zap className="h-3 w-3" />
      {label}
    </button>
  )
}
