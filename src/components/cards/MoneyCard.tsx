"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AppCard } from "@/components/ui/AppCard";
import { formatRupiah } from "@/utils/format";
import { cn } from "@/utils/cn";

interface MoneyCardProps {
  label: string;
  value: number;
  deltaLabel?: string;
  deltaValue?: number;
  positive?: boolean;
}

export function MoneyCard({ label, value, deltaLabel, deltaValue, positive = true }: MoneyCardProps) {
  return (
    <AppCard className="bg-primary text-white border-none relative overflow-hidden">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
      <div className="absolute -right-2 top-10 h-16 w-16 rounded-full bg-white/10" />
      <p className="text-caption text-white/70 relative">{label}</p>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-main-number mt-1 relative"
      >
        {formatRupiah(value)}
      </motion.p>
      {deltaValue !== undefined && (
        <div className="flex items-center gap-1.5 mt-2 relative">
          <span
            className={cn(
              "flex items-center gap-0.5 text-caption font-semibold rounded-pill px-2 py-0.5",
              positive ? "bg-white/15 text-white" : "bg-danger/20 text-white"
            )}
          >
            {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {formatRupiah(Math.abs(deltaValue))}
          </span>
          {deltaLabel && <span className="text-caption text-white/70">{deltaLabel}</span>}
        </div>
      )}
    </AppCard>
  );
}
