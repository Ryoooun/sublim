import { create } from "zustand";

export const useWordCollectionStore = create((set) => ({
  wordCollections: [],
}));
