import * as React from "react"
import { cn } from "@/lib/utils"

const variantClasses = {
  default: "btn btn-primary",
  destructive: "btn btn-error",
  outline: "btn btn-outline btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  link: "btn btn-link",
} as const

const sizeClasses = {
  default: "",
  sm: "btn-sm",
  lg: "btn-lg",
  icon: "btn-square btn-sm",
} as const

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses
  size?: keyof typeof sizeClasses
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, variantClasses as buttonVariants }
