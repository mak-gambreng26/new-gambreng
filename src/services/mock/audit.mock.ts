import { AuditLogEntry } from "@/types";

export const auditLogEntries: AuditLogEntry[] = [
  { id: "AL-001", entity: "Transaksi", aksi: "CREATE", user: "Tika (SPG)", timestamp: "21 Mei, 08:35" },
  { id: "AL-002", entity: "CheckGerai", aksi: "CREATE", user: "Rian (Checker)", timestamp: "21 Mei, 10:12", alasan: "Selisih Rp 5.000 — uang receh kurang" },
  { id: "AL-003", entity: "Restok", aksi: "UPDATE", user: "Mak-Elang (Checker)", timestamp: "21 Mei, 11:02" },
  { id: "AL-004", entity: "WorkingCapital", aksi: "UPDATE", user: "Owner", timestamp: "21 Mei, 07:00" },
];
