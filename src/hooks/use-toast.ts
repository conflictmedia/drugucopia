"use client"

import { toast as sonnerToast } from "sonner"

type ToastOptions = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

function toast(options: ToastOptions) {
  if (options.variant === "destructive") {
    return sonnerToast.error(options.title, {
      description: options.description,
    })
  }
  return sonnerToast(options.title, {
    description: options.description,
  })
}

function useToast() {
  return {
    toasts: [],
    toast,
    dismiss: (id?: string) => sonnerToast.dismiss(id),
  }
}

export { useToast, toast }
