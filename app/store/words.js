import { create } from "zustand";

export const useWordsStore = create((set) => ({
  words: [],
}));
