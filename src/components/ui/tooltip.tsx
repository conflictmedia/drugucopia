'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

/* ─── Tooltip ─── */
function Tooltip({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}) {
  return (
    <div className="tooltip-container relative inline-flex" {...props}>
      {children}
    </div>
  )
}

function TooltipTrigger({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </button>
  )
}

function TooltipContent({
  className,
  children,
  sideOffset = 4,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  sideOffset?: number
}) {
  return (
    <div
      className={cn(
        "tooltip bg-primary text-primary-content z-50 w-fit rounded-md px-3 py-1.5 text-xs",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* Stub for unused export */
function TooltipProvider({
  delayDuration = 0,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  delayDuration?: number
  children?: React.ReactNode
}) {
  return <>{children}</>
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
