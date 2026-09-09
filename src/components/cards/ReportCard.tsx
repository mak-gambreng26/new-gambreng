"use client";

import { AppCard } from "@/components/ui/AppCard";
import { formatCompactRupiah, formatNumber } from "@/utils/format";
import type { DailySummary } from "@/types";
import { ChevronRight } from "lucide-react";

export function ReportCard({ summary, onOpen }: { summary: DailySummary; onOpen?: () => void }) {
  return (
    <AppCard onClick={onOpen} className="active:opacity-80 cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="text-body font-semibold text-body">{summary.tanggal}</p>
        <ChevronRight size={18} className="text-muted" />
      </div>
      <div className="flex items-center gap-4 mt-2 text-caption text-muted">
        <span>{summary.geraiBuka} Gerai Buka</span>
        <span>{formatNumber(summary.cup)} Cup</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-caption text-muted">Omzet</p>
          <p className="text-body font-bold text-body">{formatCompactRupiah(summary.omzet)}</p>
        </div>
        <div className="text-right">
          <p className="text-caption text-muted">Profit</p>
          <p className="text-body font-bold text-success">{formatCompactRupiah(summary.profit)}</p>
        </div>
      </div>
    </AppCard>
  );
}
