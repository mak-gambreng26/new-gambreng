"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

/**
 * Renders a custom uploaded image (from /public/assets/**) when it exists,
 * and silently falls back to the given Lucide icon when the file is
 * missing or fails to load. This is what makes menu cards, tab icons, and
 * the FAB "upload-to-customize": drop a PNG at the registered path in
 * src/config/assets.ts and it's picked up automatically — no code change,
 * no redeploy-breaking 404s.
 */
export function IconAsset({
  src,
  icon: Icon,
  size = 22,
  className,
  fit = "contain",
  alt = "",
}: {
  src: string;
  icon: LucideIcon;
  size?: number;
  className?: string;
  fit?: "contain" | "cover";
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <Icon size={size} strokeWidth={2} className={className} />;
  }

  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Icon size={size} strokeWidth={2} className={cn(className, "absolute inset-0")} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full",
          fit === "cover" ? "object-cover" : "object-contain"
        )}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
