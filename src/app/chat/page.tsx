"use client";

import { useState } from "react";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { cn } from "@/utils/cn";

const rooms = [
  { id: "r1", nama: "Rian (Checker)", terakhir: "Restok Sunter sudah dikirim", waktu: "10:20", unread: 2 },
  { id: "r2", nama: "Tika (SPG Sunter)", terakhir: "Stok cup menipis kak", waktu: "09:55", unread: 1 },
  { id: "r3", nama: "Broadcast — Semua SPG", terakhir: "Jangan lupa cek QRIS hari ini", waktu: "08:00", unread: 0 },
];

export default function ChatPage() {
  const [tab, setTab] = useState<"masuk" | "terkirim" | "broadcast">("masuk");

  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Pusat Pesan" showBack />
      <div className="flex gap-2 mb-4 mt-1 bg-secondary rounded-pill p-1">
        {(["masuk", "terkirim", "broadcast"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 py-2 rounded-pill text-caption font-medium capitalize",
              tab === t ? "bg-white text-primary shadow-card" : "text-muted"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {rooms.map((r) => (
          <div key={r.id} className="flex items-center gap-3 bg-white rounded-card p-3 shadow-card">
            <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center text-primary font-bold shrink-0">
              {r.nama.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body font-semibold text-body truncate">{r.nama}</p>
              <p className="text-caption text-muted truncate">{r.terakhir}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-caption text-muted">{r.waktu}</p>
              {r.unread > 0 && (
                <span className="inline-flex mt-1 h-5 w-5 items-center justify-center rounded-full bg-danger text-white text-[10px] font-bold">
                  {r.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SafeArea>
  );
}
