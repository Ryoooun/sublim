import { create } from "zustand";

export const useSideMenuIsOpen = create((set) => ({
  isOpen: true,
  toggleOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
