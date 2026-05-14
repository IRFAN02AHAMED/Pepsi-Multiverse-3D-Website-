import { create } from "zustand";

interface FlavorStore {
  activeFlavor: string;
  isSyncing: boolean;
  setFlavor: (id: string) => void;
  startSync: (callback?: () => void) => void;
}

export const useFlavorStore = create<FlavorStore>((set) => ({
  activeFlavor: "original",
  isSyncing: false,
  setFlavor: (id) => set({ activeFlavor: id }),
  startSync: (callback) => {
    set({ isSyncing: true });
    setTimeout(() => {
      set({ isSyncing: false });
      if (callback) callback();
    }, 2800); // Cinematic transition duration
  },
}));
