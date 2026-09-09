import { AppCard } from "@/components/ui/AppCard";
import type { LogistikItem } from "@/types";
import { cn } from "@/utils/cn";

const statusDot: Record<LogistikItem["status"], string> = {
  aman: "bg-success",
  menipis: "bg-warning",
  kritis: "bg-danger",
};

const statusLabel: Record<LogistikItem["status"], string> = {
  aman: "Aman",
  menipis: "Menipis",
  kritis: "Stok Kritis",
};

export function InventoryCard({ item }: { item: LogistikItem }) {
  return (
    <AppCard className="flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <span className={cn("h-2.5 w-2.5 rounded-full shrink-0", statusDot[item.status])} />
        <div className="min-w-0">
          <p className="text-body font-semibold text-body truncate">{item.nama}</p>
          <p className="text-caption text-muted">{item.kategori}</p>
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-body font-bold text-body">
          {item.stokPusat} <span className="text-caption font-normal text-muted">{item.satuan}</span>
        </p>
        <p
          className={cn(
            "text-caption font-medium",
            item.status === "kritis" ? "text-danger" : item.status === "menipis" ? "text-warning" : "text-success"
          )}
        >
          {statusLabel[item.status]}
        </p>
      </div>
    </AppCard>
  );
}
