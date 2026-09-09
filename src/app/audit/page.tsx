import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppCard } from "@/components/ui/AppCard";
import { auditLogEntries } from "@/services/mock/audit.mock";

export default function AuditLogPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Audit Log" showBack />
      <p className="text-caption text-muted mb-4 mt-1">Jejak immutable seluruh aktivitas sistem.</p>
      <div className="flex flex-col gap-3">
        {auditLogEntries.map((a) => (
          <AppCard key={a.id}>
            <div className="flex items-center justify-between">
              <p className="text-body font-semibold text-body">{a.entity}</p>
              <span className="text-caption font-medium text-primary bg-secondary px-2 py-0.5 rounded-pill">
                {a.aksi}
              </span>
            </div>
            <p className="text-caption text-muted mt-1">{a.user} · {a.timestamp}</p>
            {a.alasan && <p className="text-caption text-warning mt-1">Alasan: {a.alasan}</p>}
          </AppCard>
        ))}
      </div>
    </SafeArea>
  );
}
