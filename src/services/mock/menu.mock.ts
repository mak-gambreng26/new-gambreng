import { MenuItem } from "@/types";
import { ASSETS } from "@/config/assets";

export const menuList: MenuItem[] = [
  { id: "m1", nama: "Teh Ekstra", harga: 10000, gambar: ASSETS.menu.tehEkstra, terjualHariIni: 22, persentase: 14 },
  { id: "m2", nama: "Teh Solo", harga: 10000, gambar: ASSETS.menu.tehSolo, terjualHariIni: 48, persentase: 31 },
  { id: "m3", nama: "Teh Jumbo", harga: 12000, gambar: ASSETS.menu.tehJumbo, terjualHariIni: 20, persentase: 13 },
  { id: "m4", nama: "Teh Susu", harga: 12000, gambar: ASSETS.menu.tehSusu, terjualHariIni: 30, persentase: 19 },
  { id: "m5", nama: "Teh Milo", harga: 12000, gambar: ASSETS.menu.tehMilo, terjualHariIni: 26, persentase: 17 },
  { id: "m6", nama: "Teh Lemon", harga: 10000, gambar: ASSETS.menu.tehLemon, terjualHariIni: 10, persentase: 6 },
];
