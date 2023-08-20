import { fallbackLng } from '@/i18n/settings';
import { create } from 'zustand';

export const useAppStore = create<{
  lang: string;
  setLang: (lang: string) => void;
}>((set) => ({
  lang: fallbackLng,
  setLang: (lang: string) => set({ lang }),
}));