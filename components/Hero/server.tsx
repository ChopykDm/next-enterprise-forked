import { useTranslation } from "@/i18n"
import { HeroBase } from "./HeroBase"

export const Hero = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'hero')
  return <HeroBase t={t} />
}