"use client";

import { create } from "zustand";

export const useURLStore = create((set) => ({
  originUrl: null,
  setOriginUrl: (newOriginUrl) => {
    set({ originUrl: newOriginUrl }, true);
  },
}));
