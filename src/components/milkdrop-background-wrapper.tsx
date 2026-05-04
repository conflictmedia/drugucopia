'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Dynamic import wrapper to avoid SSR issues with WebGL
export function MilkdropBackgroundWrapper() {
  const [MilkdropBackground, setComponent] = useState<React.ComponentType<{ isDark: boolean }> | null>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Dynamic import to skip SSR
    import('@/components/milkdrop-background').then((mod) => {
      setComponent(() => mod.MilkdropBackground)
    })
  }, [])

  if (!mounted || !MilkdropBackground) {
    // Fallback: render the CSS mesh-gradient when WebGL isn't loaded yet
    return <div className="mesh-gradient" />
  }

  const isDark = resolvedTheme === 'dark'

  return <MilkdropBackground isDark={isDark} />
}
