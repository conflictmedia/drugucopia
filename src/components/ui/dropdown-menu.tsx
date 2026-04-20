'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

/* ─── Dropdown Menu Context ─── */
const DropdownContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({ open: false, setOpen: () => {} })

function DropdownMenu({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".dropdown")) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [open])

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative" {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

function DropdownMenuTrigger({
  asChild,
  children,
  onClick,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { open, setOpen } = React.useContext(DropdownContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open)
    onClick?.(e)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick,
    })
  }

  return (
    <button type="button" className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  align = "end",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  sideOffset?: number
  align?: "start" | "center" | "end"
}) {
  const { open } = React.useContext(DropdownContext)

  if (!open) return null

  return (
    <div
      className={cn(
        "dropdown-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md",
        align === "end" && "right-0",
        align === "start" && "left-0",
        className
      )}
      style={{ top: `${sideOffset + 100}%` }}
      {...props}
    >
      <ul className="menu bg-popover text-popover-foreground p-0 rounded-md [&_li>a]:rounded-sm [&_li>a]:text-sm [&_li>a]:flex [&_li>a]:items-center [&_li>a]:gap-2 [&_li>a]:px-2 [&_li>a]:py-1.5 [&_li>a]:cursor-pointer [&_li>a]:hover:bg-accent [&_li>a]:hover:text-accent-foreground">
        {children}
      </ul>
    </div>
  )
}

function DropdownMenuItem({
  className,
  onClick,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setOpen } = React.useContext(DropdownContext)

  return (
    <li>
      <a
        className={cn("", className)}
        onClick={(e) => {
          onClick?.(e)
          setOpen(false)
        }}
        {...(props as any)}
      >
        {children}
      </a>
    </li>
  )
}

function DropdownMenuSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("divider my-1 -mx-1", className)} {...props} />
}

/* ─── Stubs for unused sub-components ─── */
function DropdownMenuGroup({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>
}

function DropdownMenuLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-2 py-1.5 text-sm font-medium", className)} {...props} />
}

function DropdownMenuPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

function DropdownMenuCheckboxItem(props: any) { return null }
function DropdownMenuRadioGroup(props: any) { return null }
function DropdownMenuRadioItem(props: any) { return null }
function DropdownMenuShortcut(props: any) { return null }
function DropdownMenuSub(props: any) { return null }
function DropdownMenuSubTrigger(props: any) { return null }
function DropdownMenuSubContent(props: any) { return null }

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
