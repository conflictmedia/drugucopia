'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

/* ─── Dialog Context ─── */
const DialogContext = React.createContext<{
  open?: boolean
  onOpenChange?: (open: boolean) => void
}>({})

function useDialog() {
  return React.useContext(DialogContext)
}

/* ─── Dialog Root ─── */
function Dialog({
  open,
  onOpenChange,
  children,
  ...props
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
} & Omit<React.ComponentProps<"dialog">, "open" | "onClose">) {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handler = () => onOpenChange?.(false)
    dialog.addEventListener("close", handler)
    return () => dialog.removeEventListener("close", handler)
  }, [onOpenChange])

  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      <dialog
        ref={dialogRef}
        className="modal"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            onOpenChange?.(false)
          }
        }}
        {...props}
      >
        {children}
      </dialog>
    </DialogContext.Provider>
  )
}

/* ─── Dialog Trigger ─── */
function DialogTrigger({
  asChild,
  children,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { onOpenChange } = useDialog()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOpenChange?.(true)
    onClick?.(e)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: handleClick,
    })
  }

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  )
}

/* ─── Dialog Content ─── */
const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { showCloseButton?: boolean }
>(({ className, children, showCloseButton = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("modal-box", className)}
    onClick={(e) => e.stopPropagation()}
    {...props}
  >
    {children}
    {showCloseButton && (
      <button
        type="button"
        className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
        onClick={() => {
          const dialog = document.querySelector('dialog[open]')
          if (dialog instanceof HTMLDialogElement) dialog.close()
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        <span className="sr-only">Close</span>
      </button>
    )}
  </div>
))
DialogContent.displayName = "DialogContent"

/* ─── Dialog Header / Footer / Title / Description ─── */
function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />
}

function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
  )
}

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-lg font-semibold leading-none", className)} {...props} />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
DialogDescription.displayName = "DialogDescription"

function DialogClose({
  asChild,
  children,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { onOpenChange } = useDialog()
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOpenChange?.(false)
    onClick?.(e)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: handleClose,
    })
  }

  return (
    <button type="button" onClick={handleClose} {...props}>
      {children}
    </button>
  )
}

/* ─── Stubs for unused exports ─── */
function DialogPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>
}

function DialogOverlay({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("modal-backdrop", className)}
      onClick={(e) => {
        const dialog = document.querySelector('dialog[open]')
        if (dialog instanceof HTMLDialogElement) dialog.close()
      }}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
