import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  ({ className, label, error, id, ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-caption text-muted font-medium">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          "min-h-[44px] w-full rounded-button border border-black/10 bg-white px-4 text-body text-body",
          "placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
          error && "border-danger focus:ring-danger/30",
          className
        )}
        {...props}
      />
      {error && <span className="text-caption text-danger">{error}</span>}
    </div>
  )
);
AppInput.displayName = "AppInput";
