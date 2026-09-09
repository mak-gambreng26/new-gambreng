"use client";

import { MobileHeader } from "@/components/layout/MobileHeader";
import { SafeArea } from "@/components/layout/SafeArea";
import { AppButton } from "@/components/ui/AppButton";
import { MenuCard } from "@/components/cards/MenuCard";
import { menuList } from "@/services/mock/menu.mock";
import { ICON } from "@/config/icons";
import { ASSETS } from "@/config/assets";

export default function KelolaMenuPage() {
  return (
    <SafeArea bottomNav={false}>
      <MobileHeader title="Kelola Menu" showBack />
      <div className="flex items-center justify-between mb-4 mt-1">
        <p className="text-caption text-muted">{menuList.length} menu aktif</p>
        <AppButton size="sm" icon={ICON.add} iconAsset={ASSETS.fab.add}>Tambah Menu</AppButton>
      </div>
      <div className="flex flex-col gap-3">
        {menuList.map((m) => (
          <MenuCard key={m.id} item={m} />
        ))}
      </div>
      <p className="text-caption text-muted mt-4">
        Setiap menu wajib memiliki logistik mapping — item logistik yang otomatis
        terkonsumsi setiap menu terjual.
      </p>
    </SafeArea>
  );
}
