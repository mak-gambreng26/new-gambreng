"use client";

import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { geraiList } from "@/services/mock/gerai.mock";
import { formatRupiah } from "@/utils/format";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function GeraiPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Gerai" showBack />
      <div className="flex items-center justify-between mb-4 mt-1">
        <p className="text-caption text-muted">{geraiList.length} gerai terdaftar</p>
        <AppButton size="sm" icon={ICON.add} iconAsset={ASSETS.fab.add}>Tambah Gerai</AppButton>
      </div>
      <div className="flex flex-col gap-3">
        {geraiList.map((g) => (
          <Link key={g.id} href={`/gerai/${g.slug}`}>
            <AppCard className="active:opacity-80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <span className={cn("h-2.5 w-2.5 rounded-full shrink-0", g.status === "buka" ? "bg-success" : "bg-muted")} />
                  <div className="min-w-0">
                    <p className="text-body font-semibold text-body truncate">{g.nama}</p>
                    <p className="text-caption text-muted truncate">{g.alamat}</p>
                  </div>
                </div>
                <ICON.chevronRight size={18} className="text-muted shrink-0" />
              </div>
              {g.status === "buka" && (
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/5">
                  <span className="text-caption text-muted">SPG: {g.spgAktif}</span>
                  <span className="text-body font-bold text-primary">{formatRupiah(g.omzetHariIni)}</span>
                </div>
              )}
            </AppCard>
          </Link>
        ))}
      </div>
    </SafeArea>
  );
}
