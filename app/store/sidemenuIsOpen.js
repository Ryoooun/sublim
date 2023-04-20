import { create } from "zustand";

export const useSideMenuIsOpen = create((set) => ({
  isOpen: false,
  toggleOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
