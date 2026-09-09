/**
 * Central asset registry.
 * Every image/illustration used across the app is referenced from here.
 * To rebrand the app, replace the files under /public/assets/** — no code changes needed.
 */

export const ASSETS = {
  brand: {
    logo: "/assets/brand/logo.png",
    logoWhite: "/assets/brand/logo-white.png",
  },
  background: {
    ownerBg: "/assets/background/owner-bg.png",
    monitoringBg: "/assets/background/monitoring-bg.png",
  },
  icons: {
    dashboard: "/assets/icons/dashboard.png",
    finance: "/assets/icons/finance.png",
    inventory: "/assets/icons/inventory.png",
    report: "/assets/icons/report.png",
    admin: "/assets/icons/admin.png",
    gerai: "/assets/icons/gerai.png",
    spg: "/assets/icons/spg.png",
    checker: "/assets/icons/checker.png",
    esKristal: "/assets/icons/es-kristal.png",
    audit: "/assets/icons/audit.png",
    history: "/assets/icons/history.png",
    arsipTransaksi: "/assets/icons/arsip-transaksi.png",
    arsipLogistik: "/assets/icons/arsip-logistik.png",
    pesan: "/assets/icons/pesan.png",
    menu: "/assets/icons/menu.png",
    kitchen: "/assets/icons/kitchen.png",
  },
  buttons: {
    primaryBg: "/assets/buttons/primary-bg.png",
    secondaryBg: "/assets/buttons/secondary-bg.png",
  },
  fab: {
    add: "/assets/fab/add.png",
  },
  cards: {
    workingCapital: "/assets/cards/working-capital.png",
  },
  menu: {
    tehSolo: "/assets/menu/teh-solo.png",
    tehMilo: "/assets/menu/teh-milo.png",
    tehEkstra: "/assets/menu/teh-ekstra.png",
    tehJumbo: "/assets/menu/teh-jumbo.png",
    tehSusu: "/assets/menu/teh-susu.png",
    tehLemon: "/assets/menu/teh-lemon.png",
  },
  gerai: {
    placeholder: "/assets/gerai/placeholder.png",
  },
  avatar: {
    placeholder: "/assets/avatar/placeholder.png",
  },
  emptyState: {
    default: "/assets/empty-state/default.png",
    noData: "/assets/empty-state/no-data.png",
  },
  loading: {
    spinner: "/assets/loading/spinner.png",
  },
} as const;
