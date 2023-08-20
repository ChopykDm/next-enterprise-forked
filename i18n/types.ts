export interface IUseTranslation<T extends any> {
  (lng: string, ns?: string, options?: {
    keyPrefix?: string
  }): T
}
