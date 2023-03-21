import {create} from 'zustand'

export const useStore = create((set, get) => ({
  userAgent: undefined,
  setUserAgent: (UA) => set({userAgent: UA})
}))
