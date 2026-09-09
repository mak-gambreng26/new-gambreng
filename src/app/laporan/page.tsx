import { MobileHeader } from "@/components/layout/MobileHeader";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { ReportCard } from "@/components/cards/ReportCard";
import { dailySummaries } from "@/services/mock/report.mock";
import { ICON } from "@/config/icons";

const quickReports = [
  { label: "Buka Gerai", icon: "gerai" as const },
  { label: "Checker", icon: "checker" as const },
  { label: "Request", icon: "arsipLogistik" as const },
  { label: "Es Kristal", icon: "esKristal" as const },
];

export default function LaporanPage() {
  return (
    <>
      <SafeArea>
        <MobileHeader title="Laporan" />
        <div className="mt-1">
          <p className="text-card-title text-body mb-3">Laporan Hari Ini Real Time</p>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {quickReports.map((r) => {
              const Icon = ICON[r.icon];
              return (
                <button key={r.label} className="flex flex-col items-center gap-1.5">
                  <span className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </span>
                  <span className="text-caption text-body text-center leading-tight">{r.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between mb-3">
            <p className="text-card-title text-body">Laporan Harian</p>
            <button className="text-caption text-primary font-medium flex items-center gap-1">
              <ICON.filter size={12} /> Bulan Ini
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {dailySummaries.map((s) => (
              <ReportCard key={s.tanggal} summary={s} />
            ))}
          </div>
        </div>
      </SafeArea>
      <BottomNavigation />
    </>
  );
}
