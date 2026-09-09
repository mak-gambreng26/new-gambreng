"use client";

import { MobileHeader } from "@/components/layout/MobileHeader";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { ICON } from "@/config/icons";

const setupStatus = [
  { label: "Working Capital", ok: true },
  { label: "Kode Owner", ok: true },
  { label: "Depo Es", ok: true },
  { label: "Menu (6 item)", ok: true },
  { label: "Logistik (13 item)", ok: true },
  { label: "Gerai", ok: false },
  { label: "SPG", ok: false },
  { label: "Checker", ok: false },
];

const masterData = [
  { label: "Daftar Gerai", icon: "gerai" as const },
  { label: "Daftar Checker", icon: "checker" as const },
  { label: "Daftar SPG", icon: "spg" as const },
  { label: "Daftar Depo Es", icon: "esKristal" as const },
  { label: "Daftar Menu", icon: "menu" as const },
  { label: "Logistik Item", icon: "arsipLogistik" as const },
];

export default function AdminPage() {
  return (
    <>
      <SafeArea>
        <MobileHeader title="Administrasi" />
        <div className="flex flex-col gap-5 mt-1">
          <AppCard className="border border-warning/30 bg-warning/5">
            <p className="text-body font-semibold text-body mb-3">⚠️ Set Data Awal Sebelum Mulai</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {setupStatus.map((s) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full shrink-0 ${s.ok ? "bg-success" : "bg-danger"}`} />
                  <span className="text-caption text-body truncate">{s.label}</span>
                </div>
              ))}
            </div>
            <AppButton size="sm" className="w-full">Lanjutkan Setup</AppButton>
          </AppCard>

          <div>
            <p className="text-card-title text-body mb-3">Manajemen Master Data</p>
            <div className="flex flex-col gap-2">
              {masterData.map((m) => {
                const Icon = ICON[m.icon];
                return (
                  <button key={m.label} className="flex items-center gap-3 bg-white rounded-card p-4 shadow-card w-full">
                    <span className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" />
                    </span>
                    <span className="text-body text-body flex-1 text-left">{m.label}</span>
                    <ICON.chevronRight size={16} className="text-muted" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-card-title text-body mb-3">Data &amp; Backup</p>
            <div className="flex flex-col gap-2">
              <AppButton variant="secondary" className="w-full justify-start" icon={ICON.download}>
                Backup Data Sekarang
              </AppButton>
              <AppButton variant="ghost" className="w-full justify-start border border-black/10">
                Import Data
              </AppButton>
              <AppButton variant="danger" className="w-full justify-start">
                Reset Input
              </AppButton>
            </div>
          </div>

          <AppCard className="border border-danger/20">
            <p className="text-body font-semibold text-danger mb-1">Pusat Edit Data</p>
            <p className="text-caption text-muted mb-3">
              Perlu kode dev. Semua perubahan tercatat di Audit Log dan wajib disertai alasan.
            </p>
            <AppButton variant="ghost" size="sm" className="border border-danger/30 text-danger">
              Masuk Pusat Edit Data
            </AppButton>
          </AppCard>
        </div>
      </SafeArea>
      <BottomNavigation />
    </>
  );
}
