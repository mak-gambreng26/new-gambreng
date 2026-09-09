"use client";

import { useState } from "react";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { SafeArea } from "@/components/layout/SafeArea";
import { InventoryCard } from "@/components/cards/InventoryCard";
import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { logistikList } from "@/services/mock/inventory.mock";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";
import { cn } from "@/utils/cn";

export default function GudangPage() {
  const [tab, setTab] = useState<"keseluruhan" | "situasional" | "history">("keseluruhan");

  return (
    <>
      <SafeArea>
        <MobileHeader title="Gudang" />
        <div className="flex gap-2 mb-4 mt-1 bg-secondary rounded-pill p-1">
          {(
            [
              ["keseluruhan", "Keseluruhan"],
              ["situasional", "Situasional"],
              ["history", "History"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={cn(
                "flex-1 py-2 rounded-pill text-caption font-medium",
                tab === key ? "bg-white text-primary shadow-card" : "text-muted"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "keseluruhan" && (
          <>
            <AppInput placeholder="Cari item logistik..." className="mb-4" />
            <div className="flex flex-col gap-2">
              {logistikList.map((item) => (
                <InventoryCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {tab === "situasional" && (
          <p className="text-caption text-muted text-center py-10">
            Belum ada item belanja situasional tercatat hari ini.
          </p>
        )}

        {tab === "history" && (
          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-card p-4 shadow-card flex items-center justify-between">
              <div>
                <p className="text-body font-medium text-body">Tambah — Gula 20 Bungkus</p>
                <p className="text-caption text-muted">21 Mei, 06:30</p>
              </div>
              <span className="text-success font-bold">+20</span>
            </div>
            <div className="bg-white rounded-card p-4 shadow-card flex items-center justify-between">
              <div>
                <p className="text-body font-medium text-body">Ambil — Kitchen Daily</p>
                <p className="text-caption text-muted">21 Mei, 07:00</p>
              </div>
              <span className="text-danger font-bold">-15</span>
            </div>
          </div>
        )}
      </SafeArea>
      <div className="fixed right-5 z-30 mx-auto max-w-mobile w-full pointer-events-none" style={{ bottom: "calc(72px + 34px + 16px)" }}>
        <div className="flex justify-end pointer-events-auto">
          <AppButton size="icon" icon={ICON.add} iconAsset={ASSETS.fab.add} className="shadow-soft h-14 w-14 rounded-full" aria-label="Tambah stok" />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
