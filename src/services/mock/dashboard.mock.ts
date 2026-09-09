import { DashboardStats, WorkingCapitalPoint } from "@/types";

export const dashboardStats: DashboardStats = {
  workingCapital: 12_450_000,
  workingCapitalDeltaToday: 450_000,
  geraiAktif: 5,
  geraiTotal: 9,
  cupTerjual: 156,
  stokKritis: 2,
};

export const workingCapitalTrend: WorkingCapitalPoint[] = [
  { tanggal: "15 Mei", saldo: 10_800_000 },
  { tanggal: "16 Mei", saldo: 11_100_000 },
  { tanggal: "17 Mei", saldo: 11_400_000 },
  { tanggal: "18 Mei", saldo: 11_950_000 },
  { tanggal: "19 Mei", saldo: 11_700_000 },
  { tanggal: "20 Mei", saldo: 12_000_000 },
  { tanggal: "21 Mei", saldo: 12_450_000 },
];

export const dashboardModules = [
  { key: "gerai", label: "Gerai", icon: "gerai", href: "/gerai", badge: null },
  { key: "spg", label: "SPG Room", icon: "spg", href: "/spg", badge: null },
  { key: "checker", label: "Checker Area", icon: "checker", href: "/checker", badge: null },
  { key: "esKristal", label: "Tagihan Es Kristal", icon: "esKristal", href: "/es-kristal", badge: 2 },
  { key: "audit", label: "Audit Log", icon: "audit", href: "/audit", badge: null },
  { key: "history", label: "History Penjualan", icon: "history", href: "/history", badge: null },
  { key: "arsipTransaksi", label: "Arsip Transaksi", icon: "arsipTransaksi", href: "/transaksi", badge: null },
  { key: "arsipLogistik", label: "Arsip Logistik", icon: "arsipLogistik", href: "/logistik", badge: null },
  { key: "pesan", label: "Pusat Pesan", icon: "pesan", href: "/chat", badge: 3 },
  { key: "menu", label: "Kelola Menu", icon: "menu", href: "/menu", badge: null },
  { key: "kitchen", label: "Daily Kitchen", icon: "kitchen", href: "/kitchen", badge: null },
] as const;
