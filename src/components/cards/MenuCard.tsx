"use client";

import { AppCard } from "@/components/ui/AppCard";
import { IconAsset } from "@/components/ui/IconAsset";
import { formatRupiah } from "@/utils/format";
import type { MenuItem } from "@/types";
import { Coffee } from "lucide-react";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <AppCard className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 overflow-hidden relative">
        <IconAsset src={item.gambar} icon={Coffee} size={48} fit="cover" alt={item.nama} className="text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-body font-semibold text-body truncate">{item.nama}</p>
        <p className="text-caption text-muted">{formatRupiah(item.harga)}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-body font-bold text-primary">{item.terjualHariIni}</p>
        <p className="text-caption text-muted">{item.persentase}%</p>
      </div>
    </AppCard>
  );
}
