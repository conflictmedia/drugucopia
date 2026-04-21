'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff, Palette, ChevronUp, ChevronDown } from 'lucide-react'
import { useVisualizerStore } from '@/store/visualizer-store'

const presets = [
  { id: 0, name: 'Cosmic Flow', color: 'from-purple-500 to-cyan-500' },
  { id: 1, name: 'Neon Dreams', color: 'from-pink-500 to-orange-500' },
  { id: 2, name: 'Acid Rain', color: 'from-green-500 to-yellow-500' },
  { id: 3, name: 'Deep Space', color: 'from-blue-500 to-teal-500' },
]

export function VisualizerControls() {
  const { enabled, intensity, preset, toggleEnabled, setIntensity, setPreset } = useVisualizerStore()
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="visualizer-controls">
      {/* Toggle button - always visible */}
      <button
        onClick={() => {
          toggleEnabled()
          if (!enabled) setExpanded(true)
        }}
        className="btn btn-ghost btn-xs btn-square"
        title={enabled ? 'Disable visualizer' : 'Enable visualizer'}
      >
        {enabled ? (
          <Eye className="h-3.5 w-3.5" />
        ) : (
          <EyeOff className="h-3.5 w-3.5 opacity-50" />
        )}
      </button>

      {/* Expand/collapse */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="btn btn-ghost btn-xs btn-square"
        title="Visualizer settings"
      >
        {expanded ? (
          <ChevronDown className="h-3.5 w-3.5" />
        ) : (
          <ChevronUp className="h-3.5 w-3.5" />
        )}
      </button>

      {/* Expanded controls */}
      {expanded && enabled && (
        <div className="visualizer-controls-panel">
          {/* Intensity slider */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wide text-neutral-content font-medium">
              Intensity
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="range range-xs range-primary"
            />
          </div>

          {/* Preset selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase tracking-wide text-neutral-content font-medium flex items-center gap-1">
              <Palette className="h-3 w-3" />
              Preset
            </label>
            <div className="grid grid-cols-2 gap-1">
              {presets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPreset(p.id)}
                  className={`text-[10px] px-2 py-1.5 rounded-md border transition-all text-left ${
                    preset === p.id
                      ? 'border-primary bg-primary/10 text-base-content font-medium'
                      : 'border-base-300 bg-base-200 text-neutral-content hover:border-primary/30'
                  }`}
                >
                  <span
                    className={`inline-block w-2 h-2 rounded-full bg-gradient-to-br ${p.color} mr-1 align-middle`}
                  />
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
