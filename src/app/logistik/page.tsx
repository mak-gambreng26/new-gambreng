import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { geraiList } from "@/services/mock/gerai.mock";

export default function ArsipLogistikPage() {
  const geraiBuka = geraiList.filter((g) => g.status === "buka");
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Arsip Logistik Gerai" showBack />
      <p className="text-caption text-muted mb-4 mt-1">
        Jejak Awal → Terpakai → Sisa per gerai per hari.
      </p>
      <div className="flex flex-col gap-3">
        {geraiBuka.map((g) => (
          <AppCard key={g.id}>
            <p className="text-body font-semibold text-body mb-2">{g.nama}</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-secondary rounded-button py-2">
                <p className="text-caption text-muted">Awal</p>
                <p className="text-body font-bold text-body">50</p>
              </div>
              <div className="bg-secondary rounded-button py-2">
                <p className="text-caption text-muted">Terpakai</p>
                <p className="text-body font-bold text-body">{g.cupHariIni}</p>
              </div>
              <div className="bg-secondary rounded-button py-2">
                <p className="text-caption text-muted">Sisa</p>
                <p className="text-body font-bold text-primary">{50 - g.cupHariIni}</p>
              </div>
            </div>
          </AppCard>
        ))}
      </div>
    </SafeArea>
  );
}
