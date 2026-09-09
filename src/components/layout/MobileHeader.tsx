"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Bell } from "lucide-react";
import { ASSETS } from "@/config/assets";

interface MobileHeaderProps {
  title?: string;
  greeting?: string;
  showBack?: boolean;
  backHref?: string;
  showLogo?: boolean;
  showNotification?: boolean;
}

export function MobileHeader({
  title,
  greeting,
  showBack = false,
  backHref = "/dashboard",
  showLogo = false,
  showNotification = false,
}: MobileHeaderProps) {
  return (
    <header className="pt-safe pb-4 flex items-center justify-between min-h-[44px]">
      <div className="flex items-center gap-2">
        {showBack && (
          <Link
            href={backHref}
            className="flex items-center justify-center h-11 w-11 -ml-2 rounded-full active:bg-black/5"
            aria-label="Kembali"
          >
            <ChevronLeft size={22} className="text-body" />
          </Link>
        )}
        <div>
          {greeting && <p className="text-caption text-muted">{greeting}</p>}
          {title && <h1 className="text-page-title text-body leading-tight">{title}</h1>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {showNotification && (
          <button
            className="relative flex items-center justify-center h-11 w-11 rounded-full bg-secondary active:opacity-80"
            aria-label="Notifikasi"
          >
            <Bell size={18} className="text-primary" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-danger" />
          </button>
        )}
        {showLogo && (
          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
            <Image
              src={ASSETS.brand.logo}
              alt="Mak-Gambreng"
              width={24}
              height={24}
              className="object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
}
