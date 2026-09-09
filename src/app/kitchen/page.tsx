import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { AppButton } from "@/components/ui/AppButton";
import { logistikList } from "@/services/mock/inventory.mock";

export default function DailyKitchenPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Daily Kitchen" showBack />
      <AppCard className="bg-secondary border-none mb-4">
        <p className="text-caption text-primary font-medium">FULL OWNER — Checker tidak terlibat</p>
        <p className="text-caption text-muted mt-1">
          Ambil logistik dari gudang untuk persiapan harian sebelum gerai dibuka.
        </p>
      </AppCard>
      <div className="flex flex-col gap-3 mb-4">
        {logistikList.slice(0, 6).map((item) => (
          <AppCard key={item.id} className="flex items-center justify-between">
            <div>
              <p className="text-body font-semibold text-body">{item.nama}</p>
              <p className="text-caption text-muted">Stok gudang: {item.stokPusat} {item.satuan}</p>
            </div>
            <input
              type="number"
              placeholder="0"
              className="w-20 text-right rounded-button border border-black/10 px-3 py-2 text-body"
            />
          </AppCard>
        ))}
      </div>
      <AppButton size="lg" className="w-full">Submit Kitchen Daily</AppButton>
    </SafeArea>
  );
}
