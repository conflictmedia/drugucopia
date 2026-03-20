'use client'

import { useState, useEffect } from 'react'
import { format, isToday, isYesterday, isThisWeek, isThisMonth } from 'date-fns'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  Trash2, 
  Calendar, 
  Clock, 
  Droplets, 
  MapPin, 
  Smile,
  Activity,
  Loader2,
  Timer,
  Download
} from 'lucide-react'
import { categoryColors } from '@/lib/substance-index'
import { useToast } from '@/hooks/use-toast'

interface DoseLog {
  id: string
  substanceId: string
  substanceName: string
  category: string
  amount: number
  unit: string
  route: string
  timestamp: string
  duration: {
    onset: string
    comeup: string
    peak: string
    offset: string
    total: string
  } | null
  notes: string | null
  mood: string | null
  setting: string | null
  intensity: number | null
  createdAt: string
}

interface DoseHistoryProps {
  refreshTrigger?: number
}

const STORAGE_KEY = 'drugucopia-dose-logs'

export function DoseHistory({ refreshTrigger }: DoseHistoryProps) {
  const [doses, setDoses] = useState<DoseLog[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchDoses = () => {
    setLoading(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const logs = stored ? JSON.parse(stored) : []
      setDoses(logs.sort((a: DoseLog, b: DoseLog) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ))
    } catch (error) {
      console.error('Error loading dose logs:', error)
      setDoses([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDoses()
  }, [refreshTrigger])

  const deleteDose = (id: string) => {
    setDeleting(id)
    try {
      const updated = doses.filter(d => d.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setDoses(updated)
      toast({
        title: 'Dose deleted',
        description: 'The dose log has been removed'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete dose',
        variant: 'destructive'
      })
    } finally {
      setDeleting(null)
    }
  }

  const exportToCSV = () => {
    if (doses.length === 0) {
      toast({
        title: 'Nothing to export',
        description: 'You have no dose logs to export yet.',
        variant: 'destructive'
      })
      return
    }

    const headers = [
      'Date',
      'Time',
      'Substance',
      'Category',
      'Amount',
      'Unit',
      'Route',
      'Total Duration',
      'Mood',
      'Setting',
      'Intensity',
      'Notes'
    ]

    const escapeCSV = (value: any) => {
      if (value === null || value === undefined) return '""'
      const str = String(value)
      return `"${str.replace(/"/g, '""')}"`
    }

    const rows = doses.map((dose) => {
      const dateObj = new Date(dose.timestamp)
      return [
        format(dateObj, 'yyyy-MM-dd'),
        format(dateObj, 'HH:mm:ss'),
        dose.substanceName,
        dose.category,
        dose.amount,
        dose.unit,
        dose.route,
        dose.duration?.total || '',
        dose.mood || '',
        dose.setting || '',
        dose.intensity || '',
        dose.notes || ''
      ]
        .map(escapeCSV)
        .join(',')
    })

    const csvContent = [headers.map(escapeCSV).join(','), ...rows].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    
    link.setAttribute('href', url)
    link.setAttribute('download', `dose-history-${format(new Date(), 'yyyy-MM-dd')}.csv`)
    document.body.appendChild(link)
    
    link.click()
    
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    toast({
      title: 'Export successful',
      description: 'Your dose history has been downloaded as a CSV file.'
    })
  }

  const groupDosesByDate = (doses: DoseLog[]) => {
    const groups: { [key: string]: DoseLog[] } = {}
    
    doses.forEach(dose => {
      const date = new Date(dose.timestamp)
      let key: string
      
      if (isToday(date)) {
        key = 'Today'
      } else if (isYesterday(date)) {
        key = 'Yesterday'
      } else if (isThisWeek(date)) {
        key = 'This Week'
      } else if (isThisMonth(date)) {
        key = 'This Month'
      } else {
        key = format(date, 'MMMM yyyy')
      }
      
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(dose)
    })
    
    return groups
  }

  const getCategoryColor = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || 'text-gray-500 bg-gray-500/10 border-gray-500/20'
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    )
  }

  if (doses.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <Calendar className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">No doses logged yet</h3>
          <p className="text-sm text-muted-foreground">
            Start tracking your substance use by logging your first dose
          </p>
        </CardContent>
      </Card>
    )
  }

  const groupedDoses = groupDosesByDate(doses)

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div className="space-y-1.5">
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Dose History
          </CardTitle>
          <CardDescription>
            Your logged substance doses
          </CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={exportToCSV}
          className="shrink-0"
        >
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {Object.entries(groupedDoses).map(([dateGroup, groupDoses]) => (
            <div key={dateGroup} className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-3 sticky top-0 bg-background py-1 z-10 text-center">
                {dateGroup}
              </h4>
              <div className="space-y-3">
                {groupDoses.map((dose) => (
                  <div 
                    key={dose.id} 
                    className="rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium">{dose.substanceName}</span>
                          {dose.category && dose.category !== 'unknown' && (
                            <Badge variant="outline" className={getCategoryColor(dose.category)}>
                              {dose.category}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Droplets className="h-3 w-3" />
                            {dose.amount} {dose.unit}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {format(new Date(dose.timestamp), 'MMM d, yyyy')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {format(new Date(dose.timestamp), 'h:mm a')}
                          </span>
                          <span>{dose.route}</span>
                          {dose.duration?.total && (
                            <span className="flex items-center gap-1">
                              <Timer className="h-3 w-3" />
                              {dose.duration.total}
                            </span>
                          )}
                        </div>

                        {(dose.mood || dose.setting || dose.notes) && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {dose.mood && (
                              <Badge variant="secondary" className="text-xs">
                                <Smile className="h-3 w-3 mr-1" />
                                {dose.mood}
                              </Badge>
                            )}
                            {dose.setting && (
                              <Badge variant="secondary" className="text-xs">
                                <MapPin className="h-3 w-3 mr-1" />
                                {dose.setting}
                              </Badge>
                            )}
                          </div>
                        )}

                        {dose.notes && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                            {dose.notes}
                          </p>
                        )}
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive shrink-0"
                        onClick={() => deleteDose(dose.id)}
                        disabled={deleting === dose.id}
                      >
                        {deleting === dose.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
