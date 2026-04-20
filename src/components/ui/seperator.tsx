import * as React from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          role={decorative ? "none" : "separator"}
          aria-orientation={orientation}
          className={cn("divider divider-horizontal m-0 before:h-full after:h-full", className)}
          {...props}
        />
      )
    }

    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={orientation}
        className={cn("divider m-0", className)}
        {...props}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator }
