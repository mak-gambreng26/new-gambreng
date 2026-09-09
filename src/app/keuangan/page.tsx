"use client";

import { MobileHeader } from "@/components/layout/MobileHeader";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { SafeArea } from "@/components/layout/SafeArea";
import { MoneyCard } from "@/components/cards/MoneyCard";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { dashboardStats, workingCapitalTrend } from "@/services/mock/dashboard.mock";
import { formatRupiah } from "@/utils/format";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";

export default function KeuanganPage() {
  return (
    <>
      <SafeArea>
        <MobileHeader title="Keuangan" />
        <div className="flex flex-col gap-4 mt-1">
          <MoneyCard
            label="SALDO SAAT INI"
            value={dashboardStats.workingCapital}
            deltaValue={dashboardStats.workingCapitalDeltaToday}
            deltaLabel="vs kemarin"
          />

          <AppCard className="bg-secondary border-none">
            <p className="text-caption text-primary font-semibold mb-1">💡 Saran Sistem</p>
            <p className="text-body text-body">
              Modal cukup untuk buka 3 gerai besok. Pertimbangkan restok gula — stok mulai menipis.
            </p>
          </AppCard>

          <div className="grid grid-cols-2 gap-3">
            <AppCard>
              <p className="text-caption text-muted">Pemasukan</p>
              <p className="text-xl font-bold text-success mt-1">{formatRupiah(450000)}</p>
              <p className="text-caption text-muted mt-0.5">2 gerai tutup</p>
            </AppCard>
            <AppCard>
              <p className="text-caption text-muted">Pengeluaran</p>
              <p className="text-xl font-bold text-danger mt-1">{formatRupiah(1200000)}</p>
              <p className="text-caption text-muted mt-0.5">3 transaksi belanja</p>
            </AppCard>
          </div>

          <AppCard>
            <div className="flex items-center justify-between mb-2">
              <p className="text-card-title text-body">Tren Saldo 7 Hari</p>
            </div>
            <RevenueChart data={workingCapitalTrend} />
          </AppCard>

          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-card-title text-body">History Working Capital</p>
              <button className="text-caption text-primary font-medium">Export</button>
            </div>
            <div className="flex flex-col gap-2">
              <AppCard className="flex items-center justify-between">
                <div>
                  <p className="text-body font-medium text-body">Setoran Tutup Gerai — Sunter</p>
                  <p className="text-caption text-muted">21 Mei, 20:35</p>
                </div>
                <p className="text-body font-bold text-success">+{formatRupiah(620000)}</p>
              </AppCard>
              <AppCard className="flex items-center justify-between">
                <div>
                  <p className="text-body font-medium text-body">Belanja Gula &amp; Susu</p>
                  <p className="text-caption text-muted">21 Mei, 07:15</p>
                </div>
                <p className="text-body font-bold text-danger">-{formatRupiah(320000)}</p>
              </AppCard>
            </div>
          </div>
        </div>
      </SafeArea>
      <div className="fixed right-5 z-30 mx-auto max-w-mobile w-full pointer-events-none" style={{ bottom: "calc(72px + 34px + 16px)" }}>
        <div className="flex justify-end pointer-events-auto">
          <AppButton size="icon" icon={ICON.add} iconAsset={ASSETS.fab.add} className="shadow-soft h-14 w-14 rounded-full" aria-label="Catat transaksi" />
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
