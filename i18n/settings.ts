// export const availableLocales = [
//   'en',
//   'ua',
// ];

export enum Locales {
  en = 'en',
  ua = 'ua'
}

export const fallbackLng = Locales.en;
export const languages = [fallbackLng, Locales.ua]
export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}