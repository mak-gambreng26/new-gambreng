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
        "bg-white rounded-card shadow-card border border-black/[0.03]",
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
