'use client'

import { useTranslation } from "@/i18n/client"
import { HeaderBase } from "./HeaderBase"

export const Header = async ({ lng }) => {
  const { t } = useTranslation(lng, 'header')
  return <>
    <HeaderBase t={t} lng={lng} />
  </>
}