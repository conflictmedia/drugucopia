'use client'

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore, doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore'
import { useToast } from '../hooks/use-toast'
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
  const { toast } = useToast()
  const { doses, deletedIds, initialize, setDosesFromSync, isLoaded } = useDoseStore()

  const [syncStatus, setSyncStatus] = useState<'idle' | 'connecting' | 'synced' | 'error'>('idle')
  const [roomId, setRoomId] = useState('')
  const [password, setPassword] = useState('')

  const cryptoKeyRef = useRef<CryptoKey | null>(null)
  const hashedRoomRef = useRef<string | null>(null)
  const unsubscribeRef = useRef<(() => void) | null>(null)
  const lastPushedHashRef = useRef<string | null>(null)
  const isPushingRef = useRef(false)
  // Tracks whether the first pull from remote has completed after connect/reconnect.
  // Prevents pushing local-only changes (e.g. deletions made while disconnected)
  // before we've had a chance to pull the authoritative remote state.
  const initialSyncDoneRef = useRef(false)

  // Initialize Zustand store on mount
  useEffect(() => {
    initialize()
  }, [initialize])

  // Use refs for doses/deletedIds so pushToSync doesn't recreate on every state change.
  // This prevents unnecessary effect triggers in the auto-push useEffect.
  const dosesRef = useRef(doses)
  const deletedIdsRef = useRef(deletedIds)
  dosesRef.current = doses
  deletedIdsRef.current = deletedIds

  const pushToSync = useCallback(async () => {
    if (!cryptoKeyRef.current || !hashedRoomRef.current || isPushingRef.current || !isLoaded) return
    const db = getDb()
    if (!db) return
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
    } catch (e) {
      console.error('Failed to push sync:', e)
    } finally {
      isPushingRef.current = false
    }
  }, [isLoaded])

  // Debounce timer ref for auto-push
  const pushDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Automatically push to sync whenever local store changes (if synced)
  // Debounced with 500ms to coalesce rapid mutations (imports, bulk deletes)
  // into a single Firestore write, preventing resource-exhausted errors.
  // Only fires after initial pull has completed.
  useEffect(() => {
    if (pushDebounceRef.current) {
      clearTimeout(pushDebounceRef.current)
      pushDebounceRef.current = null
    }

    if (syncStatus === 'synced' && isLoaded && initialSyncDoneRef.current) {
      pushDebounceRef.current = setTimeout(() => {
        pushToSync()
      }, 500)
    }

    return () => {
      if (pushDebounceRef.current) {
        clearTimeout(pushDebounceRef.current)
        pushDebounceRef.current = null
      }
    }
  }, [doses, deletedIds, syncStatus, isLoaded, pushToSync])

  const connectToSync = async (rId = roomId, pass = password) => {
    if (!rId || !pass) return
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
      cryptoKeyRef.current = await deriveKey(pass, rId)
      hashedRoomRef.current = await hashRoomName(rId, pass)
      localStorage.setItem(SYNC_AUTH_KEY, JSON.stringify({ savedRoom: rId, savedPass: pass }))
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
  }

  const disconnectSync = () => {
    if (unsubscribeRef.current) unsubscribeRef.current()
    unsubscribeRef.current = null
    cryptoKeyRef.current = null
    hashedRoomRef.current = null
    lastPushedHashRef.current = null
    localStorage.removeItem(SYNC_AUTH_KEY)
    setSyncStatus('idle')
    setRoomId('')
    setPassword('')
    toast({ title: 'Sync Disconnected', description: 'Data will only save locally.' })
  }

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

  return (
    <SyncContext.Provider value={{ syncStatus, roomId, password, setRoomId, setPassword, connectToSync, disconnectSync }}>
      {children}
    </SyncContext.Provider>
  )
}

export const useSync = () => {
  const context = useContext(SyncContext)
  if (!context) throw new Error("useSync must be used within a SyncProvider")
  return context
}
