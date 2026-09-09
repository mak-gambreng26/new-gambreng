"use client";

import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { geraiList } from "@/services/mock/gerai.mock";
import { menuList } from "@/services/mock/menu.mock";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { workingCapitalTrend } from "@/services/mock/dashboard.mock";
import { formatRupiah, formatNumber } from "@/utils/format";

export default function MonitoringPage() {
  const geraiBuka = geraiList.filter((g) => g.status === "buka");
  const totalOmzet = geraiBuka.reduce((a, g) => a + g.omzetHariIni, 0);
  const totalCup = geraiBuka.reduce((a, g) => a + g.cupHariIni, 0);

  return (
    <div className="min-h-screen bg-monitoring text-white px-safe pb-10">
      <header className="sticky top-0 z-40 -mx-5 px-5 pt-safe pb-4 flex items-center justify-between mb-6 bg-monitoring/90 backdrop-blur-xl border-b border-white/[0.06]">
        <Link href="/dashboard" className="h-11 w-11 flex items-center justify-center -ml-2">
          <ChevronLeft size={22} />
        </Link>
        <div className="text-center">
          <p className="text-caption text-white/50">PUSAT PANTAU</p>
          <p className="text-caption text-white/30">Update otomatis 10 detik</p>
        </div>
        <button className="h-11 w-11 flex items-center justify-center">
          <Download size={18} />
        </button>
      </header>

      <div className="text-center mb-6">
        <p className="text-caption text-white/50 mb-1">OMZET HARI INI</p>
        <p className="text-[44px] font-bold leading-none text-success">{formatRupiah(totalOmzet)}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white/5 rounded-card p-4">
          <p className="text-caption text-white/50">Gerai Buka</p>
          <p className="text-2xl font-bold mt-1">{geraiBuka.length}</p>
        </div>
        <div className="bg-white/5 rounded-card p-4">
          <p className="text-caption text-white/50">Cup Terjual</p>
          <p className="text-2xl font-bold mt-1">{formatNumber(totalCup)}</p>
        </div>
        <div className="bg-white/5 rounded-card p-4">
          <p className="text-caption text-white/50">Tunai</p>
          <p className="text-2xl font-bold mt-1">{formatRupiah(totalOmzet * 0.4)}</p>
        </div>
        <div className="bg-white/5 rounded-card p-4">
          <p className="text-caption text-white/50">QRIS</p>
          <p className="text-2xl font-bold mt-1">{formatRupiah(totalOmzet * 0.6)}</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-card p-4 mb-6">
        <p className="text-caption text-white/50 mb-2">Tren Penjualan</p>
        <RevenueChart data={workingCapitalTrend} />
      </div>

      <div className="bg-white/5 rounded-card p-4 mb-6">
        <p className="text-caption text-white/50 mb-3">Menu Terlaris Global</p>
        <div className="flex flex-col gap-2">
          {menuList
            .slice()
            .sort((a, b) => b.terjualHariIni - a.terjualHariIni)
            .map((m) => (
              <div key={m.id} className="flex items-center justify-between text-body">
                <span>{m.nama}</span>
                <span className="text-white/50">{m.terjualHariIni} cup</span>
              </div>
            ))}
        </div>
      </div>

      <div>
        <p className="text-caption text-white/50 mb-3">Gerai</p>
        <div className="flex flex-col gap-2">
          {geraiList.map((g) => (
            <div key={g.id} className="bg-white/5 rounded-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={"h-2 w-2 rounded-full " + (g.status === "buka" ? "bg-success" : "bg-white/20")} />
                <span>{g.nama}</span>
              </div>
              <span className="text-white/60 text-caption">
                {g.status === "buka" ? formatRupiah(g.omzetHariIni) + " · " + g.cupHariIni + " cup" : "Tutup"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
