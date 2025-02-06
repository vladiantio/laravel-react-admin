import { type ComponentProps, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { OctagonAlert } from "lucide-react"

const Input = forwardRef<HTMLInputElement, ComponentProps<"input"> & { error?: string }>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-lg border border-ring/20 bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-[border,box-shadow] placeholder:text-muted-foreground/70 hover:border-ring/40 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:border-ring/20",
            type === "search" &&
              "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
            type === "file" &&
              "p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground",
            error && "!border-destructive-light !ring-[3px] !ring-destructive-light/30",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p
              {...props}
              className={cn('mt-1 text-sm text-destructive-light flex items-center', className)}
              role="alert"
              aria-live="polite"
          >
            <OctagonAlert className="mr-2" size={16} />
            {error}
          </p>
        )}
      </>
    )
  }
)
Input.displayName = "Input"

export { Input }
