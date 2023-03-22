"use client";

import { create } from "zustand";

export const useURLStore = create((set, get) => ({
  originUrl: window.location.origin,
}));
