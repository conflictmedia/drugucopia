import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: "bg-background text-foreground border border-border shadow-lg",
          title: "text-sm font-semibold",
          description: "text-xs text-muted-foreground",
          actionButton: "btn btn-sm btn-primary",
          cancelButton: "btn btn-sm btn-ghost",
        },
      }}
    />
  )
}
