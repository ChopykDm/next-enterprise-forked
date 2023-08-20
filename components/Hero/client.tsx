import { useTranslation } from "@/i18n/client"
import { HeroBase } from "./HeroBase"

export const Hero = async ({ lng }) => {
  const { t } = useTranslation(lng, 'hero')
  return <HeroBase t={t} />
}