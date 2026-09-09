import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export const AppCard = forwardRef<HTMLDivElement, AppCardProps>(
  ({ className, padded = true, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-surface/95 rounded-card shadow-card border border-primary/[0.08]",
        padded && "p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
AppCard.displayName = "AppCard";
