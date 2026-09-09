import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { esKristalOrders } from "@/services/mock/eskristal.mock";
import { cn } from "@/utils/cn";

export default function EsKristalPage() {
  const berjalan = esKristalOrders.filter((o) => o.status === "berjalan");
  const totalBal = berjalan.reduce((a, o) => a + o.jumlahBal, 0);

  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Tagihan Es Kristal" showBack />
      <AppCard className="bg-primary text-white border-none mb-4">
        <p className="text-caption text-white/70">Tagihan Berjalan</p>
        <p className="text-main-number mt-1">{totalBal} Bal</p>
        <p className="text-caption text-white/70 mt-1">{berjalan.length} pesanan belum lunas</p>
      </AppCard>
      <div className="flex flex-col gap-3">
        {esKristalOrders.map((o) => (
          <AppCard key={o.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body font-semibold text-body">{o.geraiNama}</p>
                <p className="text-caption text-muted">{o.depo} · {o.timestamp}</p>
              </div>
              <div className="text-right">
                <p className="text-body font-bold text-body">{o.jumlahBal} Bal</p>
                <span
                  className={cn(
                    "text-caption font-medium px-2 py-0.5 rounded-pill",
                    o.status === "lunas" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  )}
                >
                  {o.status === "lunas" ? "Lunas" : "Berjalan"}
                </span>
              </div>
            </div>
          </AppCard>
        ))}
      </div>
    </SafeArea>
  );
}
