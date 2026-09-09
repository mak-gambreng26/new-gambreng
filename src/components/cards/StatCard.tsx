import { AppCard } from "@/components/ui/AppCard";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  tone?: "default" | "warning" | "danger" | "success";
  sub?: string;
}

const toneMap = {
  default: "text-body bg-secondary text-primary",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
  success: "bg-success/10 text-success",
};

export function StatCard({ label, value, icon: Icon, tone = "default", sub }: StatCardProps) {
  return (
    <AppCard className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-caption text-muted truncate">{label}</span>
        {Icon && (
          <span className={cn("h-7 w-7 rounded-full flex items-center justify-center shrink-0", toneMap[tone])}>
            <Icon size={14} />
          </span>
        )}
      </div>
      <p className="text-[22px] font-bold text-body leading-none">{value}</p>
      {sub && <p className="text-caption text-muted mt-1">{sub}</p>}
    </AppCard>
  );
}
