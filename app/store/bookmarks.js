import { create } from "zustand";

export const useBookmarksStore = create((set) => ({
  bookmarks: [],
}));
