'use client'

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/* ─── Accordion ─── */
function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
  ...props
}: {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (!defaultValue) return new Set()
    if (Array.isArray(defaultValue)) return new Set(defaultValue)
    return new Set([defaultValue])
  })

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev)
        if (next.has(value)) {
          next.delete(value)
        } else {
          if (type === "single") {
            next.clear()
          }
          next.add(value)
        }
        return next
      })
    },
    [type]
  )

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("divide-y divide-border", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionContext = React.createContext<{
  openItems: Set<string>
  toggleItem: (value: string) => void
  type: "single" | "multiple"
}>({ openItems: new Set(), toggleItem: () => {}, type: "single" })

function AccordionItem({
  value,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <div
      data-state={useAccordionContext().openItems.has(value) ? "open" : "closed"}
      className={cn("collapse collapse-arrow", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function useAccordionContext() {
  return React.useContext(AccordionContext)
}

function AccordionTrigger({
  value,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { openItems, toggleItem } = useAccordionContext()
  const isOpen = openItems.has(value)

  return (
    <>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => toggleItem(value)}
        className="hidden"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => toggleItem(value)}
        className={cn(
          "collapse-title flex items-start justify-between gap-4 text-left text-sm font-medium min-h-0 py-4",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("collapse-content", className)} {...props}>
      <div className="pt-0 pb-4">{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
