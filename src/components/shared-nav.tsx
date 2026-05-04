'use client'

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import {
  FlaskConical,
  Shuffle,
  Shield,
  Moon,
  Sun,
  Menu,
  X,
  Search,
  Activity,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { searchSubstancesRanked } from '@/lib/substances/index'

const navItems = [
  { href: '/', label: 'Substances', icon: FlaskConical },
  { href: '/interactions', label: 'Interactions', icon: Shuffle },
  { href: '/harm-reduction', label: 'Harm Reduction', icon: Shield },
]

const CATEGORY_DOTS: Record<string, string> = {
  stimulants: 'bg-amber-500',
  depressants: 'bg-indigo-500',
  hallucinogens: 'bg-purple-500',
  dissociatives: 'bg-cyan-500',
  empathogens: 'bg-pink-500',
  cannabinoids: 'bg-green-500',
  opioids: 'bg-red-500',
  deliriants: 'bg-slate-500',
  nootropics: 'bg-teal-500',
  other: 'bg-zinc-500',
}

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text
  const lower = text.toLowerCase()
  const lowerQuery = query.toLowerCase().trim()
  const index = lower.indexOf(lowerQuery)
  if (index === -1) return text
  return (
    <>
      {text.slice(0, index)}
      <span className="font-semibold text-primary">{text.slice(index, index + lowerQuery.length)}</span>
      {text.slice(index + lowerQuery.length)}
    </>
  )
}

export function SharedNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const desktopSearchRef = useRef<HTMLDivElement>(null)
  const mobileSearchRef = useRef<HTMLDivElement>(null)
  const desktopInputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const isHomePage = pathname === '/'
  const isOnMainGrid = isHomePage && !searchParams.get('substance') && !searchParams.get('view')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Clear search when navigating
  useEffect(() => {
    setSearchQuery('')
    setSearchOpen(false)
    setActiveIndex(-1)
  }, [pathname])

  // Close search dropdown on outside click
  useEffect(() => {
    if (!searchOpen) return
    const handler = (e: MouseEvent) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [searchOpen])

  // Search predictions — only on non-home pages
  const searchResults = useMemo(() => {
    if (isOnMainGrid || !searchQuery.trim() || !searchOpen) return []
    return searchSubstancesRanked(searchQuery, { limit: 8 })
  }, [searchQuery, searchOpen, isOnMainGrid])

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1)
  }, [searchResults.length])

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value)
    if (!isOnMainGrid) setSearchOpen(true)
    window.dispatchEvent(new CustomEvent('drugucopia:search', { detail: value }))
  }, [isOnMainGrid])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setSearchOpen(false)
    setActiveIndex(-1)
    window.dispatchEvent(new CustomEvent('drugucopia:search', { detail: '' }))
    desktopInputRef.current?.focus()
    mobileInputRef.current?.focus()
  }, [])

  const navigateToSubstance = useCallback((substanceId: string) => {
    setSearchOpen(false)
    setActiveIndex(-1)
    const viewParam = new URLSearchParams(window.location.search).get('view')
    const url = viewParam
      ? `/?substance=${substanceId}&view=${viewParam}`
      : `/?substance=${substanceId}`
    router.push(url)
  }, [router])

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!searchOpen || searchResults.length === 0) {
      if (e.key === 'Enter' && searchQuery.trim()) {
        setSearchOpen(false)
        if (!isOnMainGrid) {
          router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`)
        }
      }
      return
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex(prev => prev < searchResults.length - 1 ? prev + 1 : 0)
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex(prev => prev > 0 ? prev - 1 : searchResults.length - 1)
        break
      case 'Enter':
        e.preventDefault()
        const idx = activeIndex >= 0 ? activeIndex : 0
        if (idx < searchResults.length) navigateToSubstance(searchResults[idx].substance.id)
        break
      case 'Escape':
        e.preventDefault()
        setSearchOpen(false)
        setActiveIndex(-1)
        break
    }
  }, [searchOpen, searchResults, activeIndex, searchQuery, isHomePage, router, navigateToSubstance])

  const handleDoseLog = () => {
    window.dispatchEvent(new CustomEvent('drugucopia:dose-log'))
    setMobileMenuOpen(false)
  }

  // Render function (NOT a component) — returns JSX directly so it stays
  // part of SharedNav's render tree. This avoids the unfocus bug from
  // inline component definitions while keeping state/ref access simple.
  const renderSearchBar = (isMobile = false) => {
    const containerRef = isMobile ? mobileSearchRef : desktopSearchRef
    const inputRef = isMobile ? mobileInputRef : desktopInputRef

    return (
      <div ref={containerRef} className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-content" />
        <Input
          ref={inputRef}
          placeholder="Search substances..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => { if (searchQuery.trim()) setSearchOpen(true) }}
          onKeyDown={handleSearchKeyDown}
          className={cn(
            'pl-9 pr-9 bg-base-200 border-base-300/50',
            isMobile ? 'h-10' : 'h-9'
          )}
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-content hover:text-base-content transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Search predictions dropdown */}
        <AnimatePresence>
          {searchOpen && searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute z-50 top-full mt-1 w-full rounded-lg border border-base-300 bg-base-100 shadow-xl overflow-hidden"
            >
              <div className="max-h-72 overflow-y-auto p-1">
                {searchResults.map((result, idx) => {
                  const sub = result.substance
                  const isActive = idx === activeIndex
                  const matchedAlias = result.matchField !== 'name'
                    && result.matchField !== 'class'
                    && result.matchField !== 'category'
                    && result.matchField !== 'description'
                    ? result.matchField
                    : null

                  return (
                    <button
                      key={sub.id}
                      onClick={() => navigateToSubstance(sub.id)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={cn(
                        'flex items-center gap-2.5 w-full px-2.5 py-2 rounded-md text-sm transition-colors text-left',
                        isActive ? 'bg-accent text-accent-content' : 'hover:bg-accent/50'
                      )}
                    >
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full shrink-0',
                          CATEGORY_DOTS[sub.categories[0]] || 'bg-zinc-500'
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="truncate">
                          {result.matchField === 'name'
                            ? highlightMatch(sub.name, searchQuery)
                            : sub.name
                          }
                        </div>
                        <div className="text-[10px] text-neutral-content truncate">
                          {sub.class}
                        </div>
                      </div>
                      {matchedAlias && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-base-200 text-neutral-content truncate max-w-[90px] shrink-0">
                          {matchedAlias}
                        </span>
                      )}
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-base-300 text-neutral-content whitespace-nowrap hidden sm:inline-block shrink-0">
                        {sub.categories[0]}
                      </span>
                    </button>
                  )
                })}
              </div>
              <div className="px-2.5 py-1.5 border-t border-base-300 text-[10px] text-neutral-content flex items-center justify-between">
                <span>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</span>
                <span className="hidden sm:inline">
                  <kbd className="px-1 py-0.5 rounded bg-base-200 border border-base-300 text-[9px] font-mono">&uarr;&darr;</kbd>
                  {' '}navigate{' '}
                  <kbd className="px-1 py-0.5 rounded bg-base-200 border border-base-300 text-[9px] font-mono">&crarr;</kbd>
                  {' '}select
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <header className="nav-bar sticky top-0 z-50 w-full border-b border-base-300/50">
      <div className="flex h-14 items-center px-4 lg:px-6 gap-2">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
              alt="Drugucopia"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-base tracking-tight hidden sm:inline-block">
              Drugucopia
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href))
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    size="sm"
                    className={cn(
                      'gap-2 text-sm',
                      isActive && 'bg-primary/10 text-base-content font-medium'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Middle: Desktop Search (all pages) */}
        <div className="hidden md:block flex-1 max-w-sm mx-4">
          {renderSearchBar()}
        </div>

        {/* Right: dose log + theme toggle + mobile menu */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          {isHomePage && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDoseLog}
              className="hidden md:inline-flex gap-2 text-sm"
            >
              <Activity className="h-4 w-4" />
              Dose Log
            </Button>
          )}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-8 w-8"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-base-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-base-300/50 nav-bar overflow-hidden"
          >
            <nav className="flex flex-col p-2 gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start gap-3 h-11',
                        isActive && 'bg-primary/10 font-medium'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}

              {/* Dose Log (only on home page) */}
              {isHomePage && (
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-11"
                  onClick={handleDoseLog}
                >
                  <Activity className="h-4 w-4" />
                  Dose Log
                </Button>
              )}

              {/* Mobile search (all pages) */}
              <div className="px-2 py-1">
                {renderSearchBar(true)}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
