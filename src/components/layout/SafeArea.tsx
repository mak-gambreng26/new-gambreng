import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function SafeArea({
  children,
  className,
  bottomNav = true,
}: {
  children: ReactNode;
  className?: string;
  bottomNav?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-mobile px-safe",
        bottomNav ? "pb-[calc(72px+34px+16px)]" : "pb-8",
        className
      )}
    >
      {children}
    </div>
  );
}
