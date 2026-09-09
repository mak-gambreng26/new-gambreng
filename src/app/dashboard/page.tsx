"use client";

import { MobileHeader } from "@/components/layout/MobileHeader";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { SafeArea } from "@/components/layout/SafeArea";
import { MoneyCard } from "@/components/cards/MoneyCard";
import { StatCard } from "@/components/cards/StatCard";
import { ModuleCard } from "@/components/cards/ModuleCard";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { dashboardStats, dashboardModules } from "@/services/mock/dashboard.mock";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";
import { formatNumber } from "@/utils/format";
import Link from "next/link";

export default function DashboardPage() {
  const StoreIcon = ICON.gerai;
  const WarningIcon = ICON.warning;

  return (
    <>
      <SafeArea>
        <MobileHeader greeting="Selamat pagi 👋" title="Owner Dashboard" showLogo showNotification />

        <div className="flex flex-col gap-4 mt-2">
          <MoneyCard
            label="WORKING CAPITAL"
            value={dashboardStats.workingCapital}
            deltaValue={dashboardStats.workingCapitalDeltaToday}
            deltaLabel="hari ini"
          />

          <div className="grid grid-cols-3 gap-3">
            <StatCard
              label="Gerai Aktif"
              value={`${dashboardStats.geraiAktif}/${dashboardStats.geraiTotal}`}
              icon={StoreIcon}
            />
            <StatCard
              label="Cup Terjual"
              value={formatNumber(dashboardStats.cupTerjual)}
              icon={ICON.report}
            />
            <StatCard
              label="Stok Kritis"
              value={dashboardStats.stokKritis}
              icon={WarningIcon}
              tone="danger"
            />
          </div>

          <div className="flex gap-3">
            <Link href="/monitoring" className="flex-1">
              <AppButton variant="secondary" className="w-full" icon={ICON.monitoring}>
                Monitoring
              </AppButton>
            </Link>
            <Link href="/laporan" className="flex-1">
              <AppButton variant="secondary" className="w-full" icon={ICON.report}>
                Laporan
              </AppButton>
            </Link>
            <AppButton variant="primary" size="icon" icon={ICON.add} iconAsset={ASSETS.fab.add} aria-label="Tambah" />
          </div>

          <div>
            <h2 className="text-card-title text-body mb-3 mt-2">Modul Bisnis</h2>
            <div className="grid grid-cols-3 gap-3">
              {dashboardModules.map((m) => (
                <ModuleCard key={m.key} label={m.label} icon={m.icon} href={m.href} badge={m.badge} />
              ))}
            </div>
          </div>

          <Link href="/kitchen">
            <AppCard className="bg-secondary border-none flex items-center gap-3 active:opacity-90">
              <span className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <ICON.kitchenHat size={22} className="text-white" />
              </span>
              <div className="flex-1">
                <p className="text-body font-semibold text-body">Daily Kitchen</p>
                <p className="text-caption text-muted">
                  Persiapan logistik harian sebelum gerai dibuka
                </p>
              </div>
              <ICON.chevronRight className="text-primary shrink-0" size={20} />
            </AppCard>
          </Link>
        </div>
      </SafeArea>
      <BottomNavigation />
    </>
  );
}
