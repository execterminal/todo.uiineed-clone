import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-17 w-150 p-10 min-w-0 rounded-l-2xl border border-input bg-foreground indent-10px px-2.5 py-1 text-base transition-colors outline-none file:inline-flex ",
        className
      )}
      {...props}
    />
  )
}

export { Input }
