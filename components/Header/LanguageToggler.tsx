import React from 'react'
import { NavLink } from '../NavLink'
import { useAppStore } from '@/store/appStore'
import { Locales } from '@/i18n/settings'

export const LanguageToggler = () => {
  const currentLanguage = useAppStore.getState().lang
  const oppositeLanguage = currentLanguage === Locales.en ? Locales.ua : Locales.en

  return (
    <NavLink href={`/${oppositeLanguage}`}>
      {oppositeLanguage.toUpperCase()}
    </NavLink>
  )
}
