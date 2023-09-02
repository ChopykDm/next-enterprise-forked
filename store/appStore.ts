import { create } from 'zustand';
import { fallbackLng, Locales } from '@/i18n/settings';

export const useAppStore = create<{
  lang: Locales;
  setLang: (lang: Locales) => void;
}>((set) => ({
  lang: fallbackLng,
  setLang: (lang: Locales) => set({ lang }),
}));