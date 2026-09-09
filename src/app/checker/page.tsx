import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { checkerList } from "@/services/mock/checker.mock";
import { formatRupiah } from "@/utils/format";
import { cn } from "@/utils/cn";

export default function CheckerAreaPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Checker Area" showBack />
      <p className="text-caption text-muted mb-4 mt-1">
        Checker bebas mengawasi semua gerai tanpa batasan.
      </p>
      <div className="flex flex-col gap-3">
        {checkerList.map((c) => (
          <AppCard key={c.id}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                  {c.nama.charAt(0)}
                </div>
                <div>
                  <p className="text-body font-semibold text-body">{c.nama}</p>
                  <p className="text-caption text-muted flex items-center gap-1">
                    <span className={cn("h-1.5 w-1.5 rounded-full", c.status === "online" ? "bg-success" : "bg-muted")} />
                    {c.status === "online" ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center bg-secondary rounded-button py-3">
              <div>
                <p className="text-body font-bold text-body">{c.cekHariIni}x</p>
                <p className="text-caption text-muted">Cek Gerai</p>
              </div>
              <div>
                <p className="text-body font-bold text-body">{c.tutupHariIni}x</p>
                <p className="text-caption text-muted">Tutup Gerai</p>
              </div>
              <div>
                <p className="text-body font-bold text-body">{c.akurasi}%</p>
                <p className="text-caption text-muted">Akurasi</p>
              </div>
            </div>
            {c.selisihHariIni > 0 && (
              <p className="text-caption text-warning mt-2">Selisih hari ini: {formatRupiah(c.selisihHariIni)}</p>
            )}
          </AppCard>
        ))}
      </div>
    </SafeArea>
  );
}
