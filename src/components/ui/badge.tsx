import * as React from "react"
import { cn } from "@/lib/utils"

const variantClasses = {
  default: "badge",
  secondary: "badge badge-secondary",
  outline: "badge badge-outline",
  destructive: "badge badge-error",
} as const

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantClasses
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(variantClasses[variant], className)} {...props} />
  )
}

export { Badge, variantClasses as badgeVariants }
