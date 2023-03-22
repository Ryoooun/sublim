"use client";

import { create } from "zustand";
import { useState, useEffect } from "react";

export const useUserAgentStore = create((set, get) => ({
  isPC: true,
  checkIsPcType: async (user) => {
    set({ isPC: user });
  },
}));
