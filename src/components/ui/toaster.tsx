import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: "bg-base-100 text-base-content border border-base-300 shadow-lg",
          title: "text-sm font-semibold",
          description: "text-xs text-neutral-content",
          actionButton: "btn btn-sm btn-primary",
          cancelButton: "btn btn-sm btn-ghost",
        },
      }}
    />
  )
}
