"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";
import { IconAsset } from "@/components/ui/IconAsset";
import { cn } from "@/utils/cn";

const NAV_ITEMS = [
  { key: "finance", label: "Keuangan", href: "/keuangan", icon: "finance" as const },
  { key: "inventory", label: "Gudang", href: "/gudang", icon: "inventory" as const },
  { key: "report", label: "Laporan", href: "/laporan", icon: "report" as const },
  { key: "admin", label: "Admin", href: "/admin", icon: "admin" as const },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-mobile bg-white border-t border-black/[0.06]"
      style={{ paddingBottom: "34px" }}
    >
      <div className="flex items-stretch justify-between px-2" style={{ height: "72px" }}>
        {NAV_ITEMS.map((item) => {
          const Icon = ICON[item.icon];
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className="flex-1 flex flex-col items-center justify-center gap-1 min-h-[44px] relative"
            >
              {active && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute top-0 h-0.5 w-8 rounded-full bg-primary"
                />
              )}
              <IconAsset
                src={ASSETS.icons[item.icon]}
                icon={Icon}
                size={22}
                className={cn(active ? "text-primary" : "text-muted")}
              />
              <span
                className={cn(
                  "text-caption",
                  active ? "text-primary font-semibold" : "text-muted"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
