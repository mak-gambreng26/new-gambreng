"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ICON, type IconKey } from "@/config/icons";

interface ModuleCardProps {
  label: string;
  icon: IconKey;
  href: string;
  badge?: number | null;
}

export function ModuleCard({ label, icon, href, badge }: ModuleCardProps) {
  const Icon = ICON[icon];
  return (
    <Link href={href}>
      <motion.div
        whileTap={{ scale: 0.94 }}
        className="bg-surface/95 rounded-card shadow-card border border-primary/[0.08] p-3 flex flex-col items-center justify-center gap-2 aspect-square relative"
      >
        {badge ? (
          <span className="absolute top-2 right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-danger text-white text-[10px] font-bold flex items-center justify-center">
            {badge}
          </span>
        ) : null}
        <span className="h-11 w-11 rounded-2xl bg-secondary flex items-center justify-center">
          <Icon size={22} className="text-primary" strokeWidth={2} />
        </span>
        <span className="text-caption font-medium text-body text-center leading-tight">{label}</span>
      </motion.div>
    </Link>
  );
}
