# 🍵 Mak-Gambreng Owner PWA

Frontend-only mobile command center untuk owner bisnis minuman teh keliling
multi-gerai. Dibangun sesuai *Master Prompt Final* — Next.js 15 App Router,
TypeScript, Tailwind CSS, shadcn/ui-style primitives, Framer Motion, Recharts,
Zustand, dan next-pwa.

## Menjalankan proyek

```bash
npm install
npm run dev       # http://localhost:3000
```

Build production:

```bash
npm run build
npm run start
```

> **Catatan penting:** Repo ini dibuat di lingkungan tanpa akses internet,
> sehingga `npm install` **belum pernah dijalankan/diverifikasi** di sini.
> Semua kode sudah lengkap dan mengikuti API resmi tiap library (Next 15,
> React 19, Tailwind 3, Radix, Recharts, Zustand, next-pwa), tapi jalankan
> `npm install && npm run build` di mesin Anda (atau biarkan Vercel yang
> menjalankannya) sebagai langkah verifikasi pertama. Kalau ada error versi
> minor dari `next-pwa`/Next 15, langkah cepatnya: buka `next.config.js` dan
> sesuaikan sesuai versi `next-pwa` yang ter-install.

### Auth guard

Route aplikasi sekarang dilindungi oleh `src/middleware.ts`. Pengunjung yang
belum memiliki sesi owner akan diarahkan ke `/login`; sesi dibuat oleh endpoint
`/api/auth/login` dan disimpan sebagai cookie `HttpOnly` yang ditandatangani.

Di Vercel, isi `OWNER_ACCESS_CODE` dan `AUTH_SECRET` di Project Settings → Environment Variables sebelum deployment. Pada development, kode fallback adalah `1234` agar demo tetap bisa dijalankan; fallback ini tidak aktif di production.

## Struktur folder

```
src/
  app/            → semua route (App Router)
    dashboard/    → dashboard utama owner (11 modul + hero + quick action)
    monitoring/   → Pusat Pantau real-time (dark mode)
    gerai/        → daftar & detail gerai
    spg/          → SPG Room
    checker/      → Checker Area
    es-kristal/   → Tagihan Es Kristal
    audit/        → Audit Log
    history/      → History Penjualan (cup only, tanpa Rp)
    transaksi/    → Arsip Transaksi
    logistik/     → Arsip Logistik Gerai
    chat/         → Pusat Pesan
    menu/         → Kelola Menu
    kitchen/      → Daily Kitchen
    keuangan/     → Tab bottom bar — Cash flow
    gudang/       → Tab bottom bar — Logistik pusat
    laporan/      → Tab bottom bar — Laporan harian
    admin/        → Tab bottom bar — Setup & administrasi
    login/        → Login kode akses owner
  components/
    ui/           → AppButton, AppCard, AppModal, AppInput
    layout/       → MobileHeader, BottomNavigation, SafeArea
    cards/        → MoneyCard, StatCard, MenuCard, InventoryCard, ReportCard, ModuleCard
    charts/       → RevenueChart, InventoryChart (Recharts)
  config/
    theme.ts      → semua warna/spacing/radius — tidak ada hex hardcode di komponen
    assets.ts     → registry semua path gambar (ganti file di /public/assets, tampilan ikut berubah)
    icons.ts      → mapping semua icon (fallback Lucide)
  services/mock/  → mock data (siap diganti panggilan API asli)
  store/          → Zustand store (auth/session)
  types/          → semua TypeScript interface domain (Gerai, SPG, Transaksi, dst)
  utils/          → formatRupiah, cn, dll
public/
  assets/         → semua asset visual yang bisa diganti owner tanpa edit kode
  manifest.json   → PWA manifest
  icons/          → app icon 192/512 (placeholder — ganti dengan logo asli)
```

## Mengganti tampilan tanpa coding

Semua visual bisa diganti hanya dengan mengganti file di `public/assets/**`
sesuai path yang terdaftar di `src/config/assets.ts` — tidak perlu menyentuh
kode komponen sama sekali. Icon bawaan (Lucide) dipakai sebagai fallback dan
dipetakan terpusat di `src/config/icons.ts`.

## Mengganti mock data dengan API asli

Setiap file di `src/services/mock/*.mock.ts` mengekspor array/object statis.
Ganti isinya dengan pemanggilan API (fetch/axios/tRPC/dll) — bentuk data
(interface di `src/types/index.ts`) sudah dirancang mengikuti 23 entity dari
spesifikasi database, jadi kontrak datanya tidak perlu berubah.

## PWA

`next-pwa` sudah dikonfigurasi di `next.config.js` (nonaktif saat `next dev`,
aktif saat production build). `public/manifest.json` sudah lengkap dengan
ikon 192x192 dan 512x512 (placeholder hijau brand — ganti dengan logo asli
di `public/icons/`).

## Status implementasi vs Master Prompt

| Item di checklist | Status |
|---|---|
| Native mobile design, safe margin semua sisi | ✅ |
| Bottom navigation 4 tab, tanpa sidebar | ✅ |
| 11 kartu modul dashboard owner | ✅ |
| Semua warna lewat `theme.ts` | ✅ |
| Semua asset lewat `assets.ts` + folder `public/assets` | ✅ |
| Semua icon lewat `icons.ts` (fallback Lucide) | ✅ |
| AppButton/AppCard/AppModal/AppInput reusable | ✅ |
| Mock data service per domain, tidak hardcode di komponen | ✅ |
| Halaman: dashboard, login, gerai (+detail), spg, checker, monitoring, es-kristal, audit, history, transaksi, logistik, chat, menu, kitchen, keuangan, gudang, laporan, admin | ✅ semua ada isi (bukan halaman kosong) |
| PWA manifest + next-pwa + app icon | ✅ (ikon masih placeholder, ganti dengan logo asli) |
| README, package.json, vercel.json, .gitignore | ✅ |
| **`npm install` & `npm run build` diverifikasi sukses** | ⚠️ **Belum** — sandbox pembuatan tidak punya akses internet. Kode sudah lengkap & konsisten, tapi jalankan build di mesin Anda / biarkan Vercel yang build sebagai verifikasi pertama. |
| Splash screen, install prompt custom, service worker kustom | ⚠️ next-pwa men-generate service worker default saat build; splash screen & install-prompt UI kustom belum dibuat — bisa ditambahkan di iterasi berikutnya |
| Auth guard (redirect ke /login jika belum login) middleware | ⚠️ Store `useAppStore` sudah ada (`isAuthenticated`), tapi route guard middleware belum dipasang — saat ini semua halaman bisa diakses langsung |
| Form-form detail (Buka Gerai, Tutup Gerai, Cek Gerai, Restok, dsb sebagai form penuh dengan validasi Zod) | ⚠️ Halaman-halaman utama (Owner) sudah lengkap; form operasional detail checker/SPG (di luar scope "Owner App") belum dibuat — sesuai master prompt yang fokus ke **Owner PWA** |

## Yang masih tersisa / rekomendasi lanjutan

1. **Jalankan `npm install && npm run build`** di mesin dengan akses internet untuk memverifikasi tidak ada error dependency (terutama kombinasi Next 15 + next-pwa + React 19 — beberapa plugin PWA komunitas masih menyusul dukungan React 19, jika ada konflik versi, opsi: turunkan ke `next-pwa@5.6.0` peer-dep longgar atau ganti ke `@ducanh2912/next-pwa` yang lebih aktif dipelihara untuk App Router).
2. Ganti seluruh placeholder di `public/assets/**` dan `public/icons/**` dengan aset brand asli.
3. Tambahkan middleware auth guard (`src/middleware.ts`) agar route selain `/login` mengecek sesi.
4. Sambungkan `src/services/mock/*` ke backend asli (Firebase/Supabase sesuai spesifikasi awal).
5. Tambahkan splash screen & custom install-prompt UI untuk pengalaman PWA yang lebih native.
6. Form input penuh (Zod + React Hook Form) untuk alur operasional: Buka Gerai, Cek Gerai, Tutup Gerai, Restok — saat ini modul-modul tersebut sudah punya halaman tampilan data, namun form create/edit detail belum semuanya diimplementasikan.
