'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FlaskConical,
  Shuffle,
  Shield,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Substances', icon: FlaskConical },
  { href: '/interactions', label: 'Interactions', icon: Shuffle },
  { href: '/harm-reduction', label: 'Harm Reduction', icon: Shield },
]

export function SharedNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /* eslint-disable react-hooks/set-state-in-effect -- mount detection for hydration-safe theme rendering */
  useEffect(() => {
    setMounted(true)
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass">
      <div className="container mx-auto flex h-14 items-center gap-4 px-4 lg:px-6">
        {/* Logo / Home */}
        <Link
          href="/"
          className="flex items-center gap-2.5 mr-4 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-purple-500/20 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors">
            <FlaskConical className="h-4 w-4 text-primary" />
          </div>
          <span className="font-semibold text-base tracking-tight hidden sm:inline-block">
            Drugucopia
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
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
                    isActive && 'bg-primary/10 text-foreground font-medium'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Right side: theme toggle (desktop) */}
        <div className="hidden md:flex ml-auto items-center gap-2">
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
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 glass overflow-hidden"
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
              <div className="border-t border-border/50 mt-1 pt-1">
                {mounted && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-11"
                    onClick={() => {
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                      setMobileMenuOpen(false)
                    }}
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </Button>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

