"use client";

import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { spgList } from "@/services/mock/spg.mock";
import { formatRupiah } from "@/utils/format";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";
import { cn } from "@/utils/cn";

const gajiLabel: Record<string, string> = {
  harian: "Harian",
  borongan: "Borongan",
  komisi: "Komisi",
  campuran: "Campuran",
};

export default function SpgRoomPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="SPG Room" showBack />
      <div className="flex items-center justify-between mb-4 mt-1">
        <p className="text-caption text-muted">{spgList.length} SPG terdaftar</p>
        <AppButton size="sm" icon={ICON.add} iconAsset={ASSETS.fab.add}>Tambah SPG</AppButton>
      </div>
      <div className="flex flex-col gap-3">
        {spgList.map((s) => (
          <AppCard key={s.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center text-primary font-bold shrink-0">
                  {s.nama.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-body font-semibold text-body">{s.nama}</p>
                  <p className="text-caption text-muted">Gerai: {s.geraiAssigned.join(", ")}</p>
                </div>
              </div>
              <span className={cn("h-2.5 w-2.5 rounded-full shrink-0", s.status === "online" ? "bg-success" : "bg-muted")} />
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/5 text-caption">
              <span className="text-muted">Sistem: {gajiLabel[s.sistemGaji]}</span>
              {s.nominalGaji > 0 && <span className="font-semibold text-body">{formatRupiah(s.nominalGaji)}</span>}
            </div>
          </AppCard>
        ))}
      </div>
    </SafeArea>
  );
}
