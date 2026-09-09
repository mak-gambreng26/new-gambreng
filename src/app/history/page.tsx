import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { MenuCard } from "@/components/cards/MenuCard";
import { AppCard } from "@/components/ui/AppCard";
import { menuList } from "@/services/mock/menu.mock";
import { geraiList } from "@/services/mock/gerai.mock";
import { formatNumber } from "@/utils/format";

export default function HistoryPenjualanPage() {
  const totalCup = menuList.reduce((a, m) => a + m.terjualHariIni, 0);
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="History Penjualan" showBack />
      <p className="text-caption text-muted mb-4 mt-1">
        Hanya menampilkan jumlah cup &amp; transaksi — data omzet ada di tab Keuangan.
      </p>
      <AppCard className="mb-4 text-center">
        <p className="text-caption text-muted">Total Cup Terjual Hari Ini</p>
        <p className="text-main-number text-primary">{formatNumber(totalCup)}</p>
      </AppCard>
      <h2 className="text-card-title text-body mb-3">Menu Terlaris</h2>
      <div className="flex flex-col gap-3 mb-4">
        {menuList
          .slice()
          .sort((a, b) => b.terjualHariIni - a.terjualHariIni)
          .map((m) => (
            <MenuCard key={m.id} item={m} />
          ))}
      </div>
      <h2 className="text-card-title text-body mb-3">Perbandingan Gerai (Cup)</h2>
      <div className="flex flex-col gap-2">
        {geraiList
          .filter((g) => g.status === "buka")
          .sort((a, b) => b.cupHariIni - a.cupHariIni)
          .map((g) => (
            <AppCard key={g.id} className="flex items-center justify-between">
              <span className="text-body text-body">{g.nama}</span>
              <span className="text-body font-bold text-primary">{g.cupHariIni} cup</span>
            </AppCard>
          ))}
      </div>
    </SafeArea>
  );
}
