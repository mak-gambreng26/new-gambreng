export type GeraiStatus = "buka" | "tutup";

export interface Gerai {
  id: string;
  nama: string;
  slug: string;
  alamat: string;
  status: GeraiStatus;
  spgAktif?: string;
  omzetHariIni: number;
  cupHariIni: number;
  linkSpg: string;
  qrEsKristal: string;
}

export interface SPG {
  id: string;
  nama: string;
  kodeAkses: string;
  sistemGaji: "harian" | "borongan" | "komisi" | "campuran";
  nominalGaji: number;
  geraiAssigned: string[];
  status: "online" | "offline";
}

export interface Checker {
  id: string;
  nama: string;
  status: "online" | "offline";
  cekHariIni: number;
  tutupHariIni: number;
  selisihHariIni: number;
  akurasi: number;
}

export interface MenuItem {
  id: string;
  nama: string;
  harga: number;
  gambar: string;
  terjualHariIni: number;
  persentase: number;
}

export interface LogistikItem {
  id: string;
  nama: string;
  satuan: string;
  kategori: string;
  stokPusat: number;
  threshold: number;
  status: "aman" | "menipis" | "kritis";
}

export interface Transaksi {
  id: string;
  waktu: string;
  geraiNama: string;
  spgNama: string;
  menuNama: string;
  jumlah: number;
  harga: number;
  metode: "tunai" | "qris";
  status: "valid" | "void";
}

export interface EsKristalOrder {
  id: string;
  geraiNama: string;
  jumlahBal: number;
  depo: string;
  status: "berjalan" | "lunas";
  metodeBayar: "ditempat" | "tagihan";
  timestamp: string;
}

export interface AuditLogEntry {
  id: string;
  entity: string;
  aksi: string;
  user: string;
  timestamp: string;
  alasan?: string;
}

export interface DailySummary {
  tanggal: string;
  geraiBuka: number;
  cup: number;
  omzet: number;
  profit: number;
}

export interface WorkingCapitalPoint {
  tanggal: string;
  saldo: number;
}

export interface DashboardStats {
  workingCapital: number;
  workingCapitalDeltaToday: number;
  geraiAktif: number;
  geraiTotal: number;
  cupTerjual: number;
  stokKritis: number;
}
