"use client";

import Image, { type ImageProps } from "next/image";

/**
 * Wraps next/image with a built-in onError fallback (hides the image on
 * load failure). Event handlers can't be passed to next/image from a
 * Server Component, so any page that needs this behavior should render
 * <FallbackImage /> instead of <Image onError={...} /> directly.
 */
export function FallbackImage(props: ImageProps) {
  return (
    <Image
      {...props}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}
