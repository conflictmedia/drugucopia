'use client'

import React, { createContext, useContext, useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore, doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from '../hooks/use-toast'
import { useDoseStore } from '../store/dose-store'
import { DoseLog } from '../types'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Lazy-initialize Firebase so the app doesn't crash if env vars are missing.
// getDb() returns null when Firebase can't be initialized, and every caller
// checks for null before proceeding — no TypeScript "Firestore | null" error.
let _app: FirebaseApp | null = null
let _db: Firestore | null = null

function getDb(): Firestore | null {
  if (_db) return _db
  if (!firebaseConfig.apiKey) return null
  try {
    _app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
    _db = getFirestore(_app)
    return _db
  } catch {
    console.warn('Firebase initialization failed')
    return null
  }
}
const SYNC_AUTH_KEY = 'drugucopia-sync-auth'

// --- CRYPTO UTILS ---
// Chunked to avoid "Maximum call stack size exceeded" on large payloads
const buf2base64 = (buf: ArrayBuffer | Uint8Array) => {
  const bytes = new Uint8Array(buf)
  const chunkSize = 8192
  let binary = ''
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize) as unknown as number[])
  }
  return btoa(binary)
}

const base642buf = (b64: string) => {
  const binaryStr = atob(b64)
  const bytes = new Uint8Array(binaryStr.length)
  for (let i = 0; i < binaryStr.length; i++) {
    bytes[i] = binaryStr.charCodeAt(i)
  }
  return bytes
}

const hashRoomName = async (roomName: string, password: string) => {
  const data = new TextEncoder().encode(roomName + password + 'drugucopia-salt')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32)
}

const deriveKey = async (password: string, salt: string) => {
  const enc = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits', 'deriveKey'])
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
    keyMaterial, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']
  )
}

const encryptData = async (dataObj: any, key: CryptoKey) => {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(JSON.stringify(dataObj)))
  return { iv: buf2base64(iv), ciphertext: buf2base64(ciphertext) }
}

const decryptData = async (encryptedObj: { iv: string; ciphertext: string }, key: CryptoKey) => {
  const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: base642buf(encryptedObj.iv) }, key, base642buf(encryptedObj.ciphertext))
  return JSON.parse(new TextDecoder().decode(decrypted))
}

const getUpdateTime = (d: DoseLog) => new Date(d.updatedAt || d.createdAt).getTime()

const mergeDoses = (local: DoseLog[], remote: DoseLog[], localDeleted: Set<string>, remoteDeleted: Set<string>) => {
  const allDeleted = new Set([...localDeleted, ...remoteDeleted])
  const map = new Map<string, DoseLog>()

  for (const d of local) {
    if (!allDeleted.has(d.id)) map.set(d.id, d)
  }

  for (const d of remote) {
    if (allDeleted.has(d.id)) { map.delete(d.id); continue }
    const existing = map.get(d.id)

    // Check if it's new OR if the remote updatedAt is newer than the local updatedAt
    if (!existing || getUpdateTime(d) > getUpdateTime(existing)) {
      map.set(d.id, d)
    }
  }

  const doses = Array.from(map.values()).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  return { doses, deleted: allDeleted }
}
// --- CONTEXT ---
interface SyncContextType {
  syncStatus: 'idle' | 'connecting' | 'synced' | 'error'
  roomId: string
  password: string
  setRoomId: (id: string) => void
  setPassword: (pw: string) => void
  connectToSync: (rId?: string, pass?: string) => Promise<void>
  disconnectSync: () => void
}

const SyncContext = createContext<SyncContextType | null>(null)

export function SyncProvider({ children }: { children: React.ReactNode }) {
  // Use individual Zustand selectors to avoid subscribing to the entire store.
  // Only subscribe to what the UI actually renders (syncStatus, isLoaded for conditionals).
  // Read doses/deletedIds via getState() inside effects/callbacks to avoid re-renders.
  const isLoaded = useDoseStore(s => s.isLoaded)
  const initialize = useDoseStore(s => s.initialize)
  const setDosesFromSync = useDoseStore(s => s.setDosesFromSync)

  const [syncStatus, setSyncStatusRaw] = useState<'idle' | 'connecting' | 'synced' | 'error'>('idle')
  const [roomId, setRoomId] = useState('')
  const [password, setPassword] = useState('')

  const cryptoKeyRef = useRef<CryptoKey | null>(null)
  const hashedRoomRef = useRef<string | null>(null)
  const unsubscribeRef = useRef<(() => void) | null>(null)
  const lastPushedHashRef = useRef<string | null>(null)
  const isPushingRef = useRef(false)
  const initialSyncDoneRef = useRef(false)
  const syncStatusRef = useRef<'idle' | 'connecting' | 'synced' | 'error'>('idle')
  const pushDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Guard against feedback loop: when setDosesFromSync updates the Zustand
  // store, the subscription listener fires and would schedule another push.
  // This flag tells the subscription to skip the next auto-push.
  const skipNextAutoPushRef = useRef(false)

  // Rate-limit: minimum milliseconds between actual Firestore writes.
  // Prevents rapid-fire setDoc calls that exhaust the write stream.
  const MIN_WRITE_INTERVAL_MS = 3000
  const lastWriteTimeRef = useRef<number>(0)

  // Keep refs in sync with roomId/password state so connectToSync can read
  // current values without depending on them in its useCallback dependency array.
  // This prevents the callback (and the entire context value) from being
  // recreated on every keystroke in the room/password inputs.
  const roomIdRef = useRef(roomId)
  const passwordRef = useRef(password)
  useEffect(() => { roomIdRef.current = roomId }, [roomId])
  useEffect(() => { passwordRef.current = password }, [password])

  // Wrapper that keeps both React state and ref in sync
  const setSyncStatus = useCallback((status: 'idle' | 'connecting' | 'synced' | 'error') => {
    syncStatusRef.current = status
    setSyncStatusRaw(status)
  }, [])

  // Initialize Zustand store on mount
  useEffect(() => {
    initialize()
  }, [initialize])

  // Use refs for doses/deletedIds so pushToSync doesn't recreate on every state change.
  // This prevents unnecessary effect triggers in the auto-push subscription.
  const dosesRef = useRef(useDoseStore.getState().doses)
  const deletedIdsRef = useRef(useDoseStore.getState().deletedIds)

  const pushToSync = useCallback(async () => {
    if (!cryptoKeyRef.current || !hashedRoomRef.current || isPushingRef.current || !isLoaded) return
    const db = getDb()
    if (!db) return

    // Rate-limit: enforce minimum interval between Firestore writes
    const now = Date.now()
    const elapsed = now - lastWriteTimeRef.current
    if (elapsed < MIN_WRITE_INTERVAL_MS) {
      const delay = MIN_WRITE_INTERVAL_MS - elapsed
      if (pushDebounceRef.current) clearTimeout(pushDebounceRef.current)
      pushDebounceRef.current = setTimeout(() => {
        pushDebounceRef.current = null
        pushToSync()
      }, delay)
      return
    }

    isPushingRef.current = true
    try {
      const currentDoses = dosesRef.current
      const currentDeleted = deletedIdsRef.current
      const payload = { doses: currentDoses, deleted: [...currentDeleted] }
      const encrypted = await encryptData(payload, cryptoKeyRef.current)
      lastPushedHashRef.current = encrypted.ciphertext.substring(0, 32)
      await setDoc(doc(db, 'secure_rooms', hashedRoomRef.current), {
        encrypted,
        updatedAt: serverTimestamp(),
      })
      lastWriteTimeRef.current = Date.now()
    } catch (e) {
      console.error('Failed to push sync:', e)
    } finally {
      isPushingRef.current = false
    }
  }, [isLoaded])

  // Subscribe to Zustand store changes OUTSIDE of React render cycle.
  // Updates refs and triggers debounced push without causing re-renders.
  useEffect(() => {
    const unsub = useDoseStore.subscribe((state) => {
      dosesRef.current = state.doses
      deletedIdsRef.current = state.deletedIds

      // Skip auto-push if this state change came from a sync merge.
      // This prevents the feedback loop: remote data → merge → push → echo.
      if (skipNextAutoPushRef.current) {
        skipNextAutoPushRef.current = false
        return
      }

      if (syncStatusRef.current === 'synced' && state.isLoaded && initialSyncDoneRef.current) {
        if (pushDebounceRef.current) {
          clearTimeout(pushDebounceRef.current)
          pushDebounceRef.current = null
        }
        pushDebounceRef.current = setTimeout(() => {
          pushDebounceRef.current = null
          pushToSync()
        }, 2000)
      }
    })

    return () => {
      unsub()
      if (pushDebounceRef.current) {
        clearTimeout(pushDebounceRef.current)
        pushDebounceRef.current = null
      }
    }
  }, [pushToSync])

  const connectToSync = useCallback(async (rId?: string, pass?: string) => {
    const effectiveRId = rId ?? roomIdRef.current
    const effectivePass = pass ?? passwordRef.current
    if (!effectiveRId || !effectivePass) return
    if (!window.crypto?.subtle) {
      toast({ title: 'Encryption Blocked', description: 'HTTPS is required for syncing.', variant: 'destructive' })
      return
    }

    if (unsubscribeRef.current) {
      unsubscribeRef.current()
      unsubscribeRef.current = null
    }

    setSyncStatus('connecting')
    try {
      cryptoKeyRef.current = await deriveKey(effectivePass, effectiveRId)
      hashedRoomRef.current = await hashRoomName(effectiveRId, effectivePass)
      localStorage.setItem(SYNC_AUTH_KEY, JSON.stringify({ savedRoom: effectiveRId, savedPass: effectivePass }))
      initialSyncDoneRef.current = false

      const db = getDb()
      if (!db) {
        setSyncStatus('error')
        toast({ title: 'Sync Unavailable', description: 'Firebase is not configured. Check your environment variables.', variant: 'destructive' })
        return
      }

      const docRef = doc(db, 'secure_rooms', hashedRoomRef.current)

      unsubscribeRef.current = onSnapshot(docRef, {
        next: async (docSnap) => {
          if (isPushingRef.current) return

          if (!docSnap.exists()) {
            // New room — nothing to pull, push local state immediately
            initialSyncDoneRef.current = true
            pushToSync()
            return
          }

          const remoteData = docSnap.data()
          const remoteHash = remoteData.encrypted?.ciphertext?.substring(0, 32)
          if (remoteHash && remoteHash === lastPushedHashRef.current) {
            // Even for echo-suppressed snapshots, mark initial sync done
            // so the auto-push can resume
            initialSyncDoneRef.current = true
            return
          }

          try {
            const payload = await decryptData(remoteData.encrypted, cryptoKeyRef.current!)
            const remoteDoses: DoseLog[] = Array.isArray(payload) ? payload : payload.doses ?? []
            const remoteDeleted: Set<string> = new Set(Array.isArray(payload) ? [] : payload.deleted ?? [])

            const localDoses = useDoseStore.getState().doses
            const localDeleted = useDoseStore.getState().deletedIds

            // On the first sync after connect/reconnect, ignore local deletions.
            // This ensures that entries deleted while offline are restored from
            // the remote source of truth, rather than the deletions being
            // propagated back and wiping the remote data.
            const isFirstSync = !initialSyncDoneRef.current
            initialSyncDoneRef.current = true

            const effectiveLocalDeleted = isFirstSync ? new Set<string>() : localDeleted

            const { doses: merged, deleted: mergedDeleted } = mergeDoses(localDoses, remoteDoses, effectiveLocalDeleted, remoteDeleted)

            // Prevent the incoming sync merge from triggering an auto-push.
            // Without this, the Zustand subscription would fire pushToSync
            // again, creating a feedback loop that exhausts Firestore writes.
            skipNextAutoPushRef.current = true
            setDosesFromSync(merged, mergedDeleted)

          } catch (e) {
            console.error('Decryption failed:', e)
            setSyncStatus('error')
          }
        },
        error: (err) => {
          console.error('Firestore snapshot error:', err)
          setSyncStatus('error')
          toast({ title: 'Sync Error', description: 'Lost connection to sync room. Changes save locally.', variant: 'destructive' })
        }
      })

      setSyncStatus('synced')
      toast({ title: 'Secure Sync Active', description: 'Your data is now end-to-end encrypted and syncing.' })
    } catch (error) {
      console.error('Sync connection error:', error)
      setSyncStatus('error')
    }
  // roomId and password are read via refs to avoid recreating on every keystroke
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, setDosesFromSync, pushToSync, setSyncStatus])

  const disconnectSync = useCallback(() => {
    if (unsubscribeRef.current) unsubscribeRef.current()
    unsubscribeRef.current = null
    cryptoKeyRef.current = null
    hashedRoomRef.current = null
    lastPushedHashRef.current = null
    skipNextAutoPushRef.current = false
    lastWriteTimeRef.current = 0
    if (pushDebounceRef.current) {
      clearTimeout(pushDebounceRef.current)
      pushDebounceRef.current = null
    }
    localStorage.removeItem(SYNC_AUTH_KEY)
    setSyncStatus('idle')
    setRoomId('')
    setPassword('')
    toast({ title: 'Sync Disconnected', description: 'Data will only save locally.' })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSyncStatus])

  // Auto-connect on load
  useEffect(() => {
    const savedAuth = localStorage.getItem(SYNC_AUTH_KEY)
    if (savedAuth) {
      try {
        const { savedRoom, savedPass } = JSON.parse(savedAuth)
        setRoomId(savedRoom)
        setPassword(savedPass)
        connectToSync(savedRoom, savedPass)
      } catch {
        localStorage.removeItem(SYNC_AUTH_KEY)
      }
    }
    return () => { if (unsubscribeRef.current) unsubscribeRef.current() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextValue = useMemo(() => ({
    syncStatus, roomId, password, setRoomId, setPassword, connectToSync, disconnectSync,
  }), [syncStatus, roomId, password, connectToSync, disconnectSync])

  return (
    <SyncContext.Provider value={contextValue}>
      {children}
    </SyncContext.Provider>
  )
}

export const useSync = () => {
  const context = useContext(SyncContext)
  if (!context) throw new Error("useSync must be used within a SyncProvider")
  return context
}
