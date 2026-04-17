import { create } from 'zustand'
import { DoseLog } from '../types'

const STORAGE_KEY = 'drugucopia-dose-logs'
const DELETED_KEY = 'drugucopia-deleted-ids'

interface DoseStore {
  doses: DoseLog[]
  deletedIds: Set<string>
  isLoaded: boolean

  initialize: () => (() => void) | void
  addDose: (dose: DoseLog) => void
  addDoses: (newDoses: DoseLog[]) => void
  replaceDoses: (newDoses: DoseLog[]) => void
  updateDose: (dose: DoseLog) => void
  deleteDose: (id: string) => void
  clearAllDoses: () => void
  setDosesFromSync: (doses: DoseLog[], deletedIds: Set<string>) => void
}

const sortByTime = (doses: DoseLog[]) =>
  [...doses].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

export const useDoseStore = create<DoseStore>((set, get) => ({
  doses: [],
  deletedIds: new Set(),
  isLoaded: false,

  initialize: () => {
    // Guard: only run once
    if (get().isLoaded) return

    try {
      const localDoses: DoseLog[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const localDeleted = new Set<string>(JSON.parse(localStorage.getItem(DELETED_KEY) || '[]'))
      set({ doses: sortByTime(localDoses), deletedIds: localDeleted, isLoaded: true })
    } catch (e) {
      console.error('Failed to parse local storage', e)
      set({ isLoaded: true })
    }

    // Single, stable storage listener — kept for cross-tab sync.
    // Returns a cleanup fn so callers (e.g. React effects) can unsubscribe.
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue !== null) {
        try {
          set({ doses: sortByTime(JSON.parse(e.newValue)) })
        } catch {}
      }
      if (e.key === DELETED_KEY && e.newValue !== null) {
        try {
          set({ deletedIds: new Set(JSON.parse(e.newValue)) })
        } catch {}
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  },

  addDose: (dose) => {
    set((state) => {
      const updated = sortByTime([dose, ...state.doses])
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return { doses: updated }
    })
  },

  updateDose: (updatedDose) => {
    set((state) => {
      const updated = sortByTime(
        state.doses.map(d => d.id === updatedDose.id ? updatedDose : d)
      )
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return { doses: updated }
    })
  },

  deleteDose: (id) => {
    set((state) => {
      const updatedDoses = state.doses.filter(d => d.id !== id)
      const updatedDeleted = new Set(state.deletedIds).add(id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDoses))
      localStorage.setItem(DELETED_KEY, JSON.stringify([...updatedDeleted]))
      return { doses: updatedDoses, deletedIds: updatedDeleted }
    })
  },

  // Bulk add — single state update for multiple doses (e.g. import).
  // Coalesces into one store update + one localStorage write.
  addDoses: (newDoses) => {
    set((state) => {
      const updated = sortByTime([...newDoses, ...state.doses])
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return { doses: updated }
    })
  },

  // Replace all doses — used for import with overwrite strategy.
  // Removes any existing doses with IDs in the new set, then adds them.
  replaceDoses: (newDoses) => {
    set((state) => {
      const newIds = new Set(newDoses.map(d => d.id))
      const kept = state.doses.filter(d => !newIds.has(d.id))
      const updated = sortByTime([...newDoses, ...kept])
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return { doses: updated }
    })
  },

  // Clear all doses — single state update instead of N individual deletes.
  clearAllDoses: () => {
    set((state) => {
      const allIds = [...state.doses.map(d => d.id), ...state.deletedIds]
      const updatedDeleted = new Set(state.deletedIds)
      allIds.forEach(id => updatedDeleted.add(id))
      localStorage.setItem(STORAGE_KEY, '[]')
      localStorage.setItem(DELETED_KEY, JSON.stringify([...updatedDeleted]))
      return { doses: [], deletedIds: updatedDeleted }
    })
  },

  setDosesFromSync: (doses, deletedIds) => {
    const sorted = sortByTime(doses)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted))
    localStorage.setItem(DELETED_KEY, JSON.stringify([...deletedIds]))
    set({ doses: sorted, deletedIds })
  },
}))
