import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border dark:border-white/10 border-black/10 focus:border-accent font-light dark:bg-primary bg-primaryLight px-4 py-5 text-base dark:placeholder:text-white/60 placeholder:text-black/60 outline-none ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
