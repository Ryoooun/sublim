import { create } from "zustand";

export const useIsAuth = create((set) => ({
  isAuth: false,
}));
