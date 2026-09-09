"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { IconAsset } from "@/components/ui/IconAsset";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-colors disabled:opacity-40 disabled:pointer-events-none select-none min-h-[44px]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white active:bg-primary/90",
        secondary: "bg-secondary text-primary active:bg-secondary/80",
        danger: "bg-danger text-white active:bg-danger/90",
        ghost: "bg-transparent text-body active:bg-black/5",
        icon: "bg-secondary text-primary p-2 rounded-full",
      },
      size: {
        default: "px-5 py-3 text-body",
        sm: "px-4 py-2 text-caption",
        lg: "px-6 py-4 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
  /** Optional path to a custom uploaded icon (e.g. ASSETS.fab.add). Falls back to `icon` automatically if missing. */
  iconAsset?: string;
  iconPosition?: "left" | "right";
}

export const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ className, variant, size, icon: Icon, iconAsset, iconPosition = "left", children, ...props }, ref) => {
    const iconSize = size === "icon" ? 24 : 18;
    const renderedIcon = Icon
      ? iconAsset
        ? <IconAsset src={iconAsset} icon={Icon} size={iconSize} />
        : <Icon size={iconSize} strokeWidth={2} />
      : null;

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(props as any)}
      >
        {renderedIcon && iconPosition === "left" && renderedIcon}
        {children}
        {renderedIcon && iconPosition === "right" && renderedIcon}
      </motion.button>
    );
  }
);
AppButton.displayName = "AppButton";
