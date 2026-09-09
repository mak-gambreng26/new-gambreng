import { create } from "zustand";

interface AppState {
  ownerName: string;
  isAuthenticated: boolean;
  activeGeraiFilter: string | null;
  login: () => void;
  logout: () => void;
  setGeraiFilter: (id: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  ownerName: "Owner",
  isAuthenticated: false,
  activeGeraiFilter: null,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
  setGeraiFilter: (id) => set({ activeGeraiFilter: id }),
}));
