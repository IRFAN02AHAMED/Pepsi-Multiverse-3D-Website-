import { create } from "zustand";

interface FlavorStore {
  activeFlavor: string;
  setFlavor: (id: string) => void;
}

export const useFlavorStore = create<FlavorStore>((set) => ({
  activeFlavor: "original",
  setFlavor: (id) => set({ activeFlavor: id }),
}));
