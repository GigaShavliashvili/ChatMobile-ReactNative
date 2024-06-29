import { create } from "zustand";
export const useLenStore = create<{
  len: "en" | "geo";
  setLen: (val: "en" | "geo") => void;
}>((set) => ({
  len: "en",
  setLen: (len) => set({ len }),
}));
