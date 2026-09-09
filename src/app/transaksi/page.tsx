import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { transaksiList } from "@/services/mock/transaction.mock";
import { formatRupiah } from "@/utils/format";
import { ICON } from "@/config/icons";
import { cn } from "@/utils/cn";

export default function ArsipTransaksiPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Arsip Transaksi" showBack />
      <div className="flex items-center gap-2 mb-4 mt-1 overflow-x-auto">
        <button className="shrink-0 flex items-center gap-1.5 text-caption font-medium bg-secondary text-primary px-3 py-2 rounded-pill">
          <ICON.filter size={14} /> Filter
        </button>
        <button className="shrink-0 text-caption text-muted px-3 py-2">Hari Ini</button>
        <button className="shrink-0 text-caption text-muted px-3 py-2">Semua Gerai</button>
      </div>
      <div className="flex flex-col gap-3">
        {transaksiList.map((t) => (
          <AppCard key={t.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body font-semibold text-body">{t.menuNama} x{t.jumlah}</p>
                <p className="text-caption text-muted">{t.geraiNama} · {t.spgNama} · {t.waktu}</p>
              </div>
              <div className="text-right">
                <p className="text-body font-bold text-body">{formatRupiah(t.harga)}</p>
                <span
                  className={cn(
                    "text-caption font-medium px-2 py-0.5 rounded-pill",
                    t.metode === "qris" ? "bg-secondary text-primary" : "bg-warning/10 text-warning"
                  )}
                >
                  {t.metode.toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-caption text-muted mt-2">{t.id}</p>
          </AppCard>
        ))}
      </div>
    </SafeArea>
  );
}
