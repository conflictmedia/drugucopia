import { create } from 'zustand'

const STORAGE_KEY = 'drugucopia-visualizer'

interface VisualizerState {
  enabled: boolean
  intensity: number
  preset: number
  setEnabled: (enabled: boolean) => void
  toggleEnabled: () => void
  setIntensity: (intensity: number) => void
  setPreset: (preset: number) => void
}

function loadPersisted(): Partial<VisualizerState> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        enabled: parsed.enabled ?? true,
        intensity: parsed.intensity ?? 0.8,
        preset: parsed.preset ?? 0,
      }
    }
  } catch {}
  return {}
}

function persist(state: Pick<VisualizerState, 'enabled' | 'intensity' | 'preset'>) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}

export const useVisualizerStore = create<VisualizerState>((set, get) => ({
  enabled: true,
  intensity: 0.45,
  preset: 0,

  setEnabled: (enabled) => {
    set({ enabled })
    persist({ enabled, intensity: get().intensity, preset: get().preset })
  },

  toggleEnabled: () => {
    const enabled = !get().enabled
    set({ enabled })
    persist({ enabled, intensity: get().intensity, preset: get().preset })
  },

  setIntensity: (intensity) => {
    set({ intensity })
    persist({ enabled: get().enabled, intensity, preset: get().preset })
  },

  setPreset: (preset) => {
    set({ preset })
    persist({ enabled: get().enabled, intensity: get().intensity, preset })
  },
}))

// Initialize from localStorage on client
if (typeof window !== 'undefined') {
  const persisted = loadPersisted()
  if (Object.keys(persisted).length > 0) {
    useVisualizerStore.setState(persisted)
  }
}
