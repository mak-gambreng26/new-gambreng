import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { StatCard } from "@/components/cards/StatCard";
import { FallbackImage } from "@/components/ui/FallbackImage";
import { geraiList } from "@/services/mock/gerai.mock";
import { formatRupiah } from "@/utils/format";
import { ICON } from "@/config/icons";
import { notFound } from "next/navigation";
import { ASSETS } from "@/config/assets";

export default async function GeraiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gerai = geraiList.find((g) => g.slug === slug);
  if (!gerai) notFound();

  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title={gerai.nama} showBack backHref="/gerai" />
      <AppCard className="flex items-center gap-3 mb-4">
        <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden relative shrink-0">
          <FallbackImage src={ASSETS.gerai.placeholder} alt={gerai.nama} fill className="object-cover" />
          <ICON.gerai size={22} className="text-primary absolute" />
        </div>
        <div className="min-w-0">
          <p className="text-body font-semibold text-body truncate">{gerai.alamat}</p>
          <p className="text-caption text-muted">Link SPG: {gerai.linkSpg}</p>
        </div>
      </AppCard>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatCard label="Omzet Hari Ini" value={formatRupiah(gerai.omzetHariIni)} tone="success" />
        <StatCard label="Cup Terjual" value={gerai.cupHariIni} />
      </div>

      <AppCard className="mb-3">
        <p className="text-card-title text-body mb-2">QR Es Kristal</p>
        <p className="text-caption text-muted">{gerai.qrEsKristal}</p>
      </AppCard>

      <AppCard>
        <p className="text-card-title text-body mb-1">History Pendapatan</p>
        <p className="text-caption text-muted">Filter: Hari / 7 Hari / 30 Hari / Bulan / Custom — data ditampilkan dari Monitoring &amp; DailySummary setelah reset harian.</p>
      </AppCard>
    </SafeArea>
  );
}
