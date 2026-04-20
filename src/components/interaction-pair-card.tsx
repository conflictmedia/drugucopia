'use client'

import { AlertTriangle, HelpCircle, ShieldAlert, ThumbsDown, ThumbsUp, TrendingDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { InteractionResult } from '@/lib/interaction-checker'

interface InteractionPairCardProps {
  result: InteractionResult
}

const severityConfig = {
  dangerous: {
    icon: ShieldAlert,
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/5',
    badgeColor: 'bg-red-500/15 text-red-400 border-red-500/30',
    badgeLabel: 'DANGEROUS',
    iconColor: 'text-red-400',
  },
  unsafe: {
    icon: AlertTriangle,
    borderColor: 'border-orange-500/30',
    bgColor: 'bg-orange-500/5',
    badgeColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    badgeLabel: 'UNSAFE',
    iconColor: 'text-orange-400',
  },
  caution: {
    icon: HelpCircle,
    borderColor: 'border-amber-500/30',
    bgColor: 'bg-amber-500/5',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    badgeLabel: 'CAUTION',
    iconColor: 'text-amber-400',
  },
  'low-risk': {
    icon: ThumbsUp,
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/5',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    badgeLabel: 'LOW RISK',
    iconColor: 'text-emerald-400',
  },
}

const tripsitStatusLabel: Record<string, string> = {
  'Low Risk & Synergy': 'SYNERGY',
  'Low Risk & No Synergy': 'NO SYNERGY',
  'Low Risk & Decrease': 'DECREASES',
}

export function InteractionPairCard({ result }: InteractionPairCardProps) {
  const config = severityConfig[result.severity]
  const Icon = config.icon
  const isTripsit = result.sources.includes('tripsit')

  // Determine sub-label for low-risk results
  const subLabel = result.tripsitStatus
    ? tripsitStatusLabel[result.tripsitStatus]
    : null

  return (
    <Card
      className={cn(
        'border transition-all hover:shadow-md',
        config.borderColor,
        config.bgColor
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className={cn('p-1.5 rounded-lg shrink-0', config.bgColor)}>
            {result.tripsitStatus === 'Low Risk & Decrease' ? (
              <TrendingDown className={cn('h-4 w-4', config.iconColor)} />
            ) : result.tripsitStatus === 'Low Risk & No Synergy' ? (
              <ThumbsDown className={cn('h-4 w-4', config.iconColor)} />
            ) : (
              <Icon className={cn('h-4 w-4', config.iconColor)} />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Substance pair */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <Badge variant="outline" className="font-medium text-sm">
                {result.substanceA}
              </Badge>
              <span className="text-neutral-content font-bold text-xs">&times;</span>
              <Badge variant="outline" className="font-medium text-sm">
                {result.substanceB}
              </Badge>
            </div>

            {/* Description */}
            {result.description && (
              <p className="text-sm text-neutral-content leading-relaxed mb-2">
                {result.description}
              </p>
            )}

            {/* Matched interaction terms */}
            {result.matchedTerms.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <span className="text-xs text-neutral-content">Matched:</span>
                {result.matchedTerms.map((term, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {term}
                  </Badge>
                ))}
              </div>
            )}

            {/* Academic sources (collapsible — shows all when expanded) */}
            {result.tripsitSources && result.tripsitSources.length > 0 && (
              <details className="mb-2 group">
                <summary className="text-xs text-neutral-content cursor-pointer hover:text-base-content transition-colors select-none">
                  {result.tripsitSources.length} source{result.tripsitSources.length !== 1 ? 's' : ''}
                </summary>
                <ul className="mt-1 space-y-1">
                  {result.tripsitSources.map((src, i) => (
                    <li key={i} className="text-xs text-neutral-content">
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-base-content underline decoration-neutral-content/30 hover:decoration-base-content/50 transition-colors"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {/* Metadata row */}
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={cn('text-[10px] font-bold', config.badgeColor)}
              >
                {config.badgeLabel}
              </Badge>
              {subLabel && (
                <Badge
                  variant="outline"
                  className={cn('text-[10px] font-bold', config.badgeColor)}
                >
                  {subLabel}
                </Badge>
              )}
              {isTripsit && (
                <Badge variant="outline" className="text-[10px] text-blue-400 border-blue-500/30 bg-blue-500/10">
                  TRIPSIT
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
