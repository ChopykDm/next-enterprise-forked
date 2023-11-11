import Image from "next/image"

import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import logoLaravel from "@/images/logos/laravel.svg"
import logoMirage from "@/images/logos/mirage.svg"
import logoStatamic from "@/images/logos/statamic.svg"
import logoStaticKit from "@/images/logos/statickit.svg"
import logoTransistor from "@/images/logos/transistor.svg"
import logoTuple from "@/images/logos/tuple.svg"
import { TFunction } from "i18next"
import { Title } from "./Title"

export const HeroBase: React.FC<{
  t: TFunction
}> = async ({
  t
}) => {
    return (
      <Container className="pb-16 pt-20 text-center lg:pt-32">
        <Title title1={t('title.p1')} title2={t('title.p2')} title3={t('title.p3')}/>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          {t('subtitle')}
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button href="/register">{t('connect-button.text')}</Button>
          <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="outline">
            <svg aria-hidden="true" className="h-3 w-3 flex-none fill-primary-600 group-active:fill-current">
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3">{t('watch-work-button.text')}</span>
          </Button>
        </div>
        <div className="mt-36 lg:mt-44">
          <p className="font-display text-base text-slate-900">{t('trusted-by.text')}</p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: "Transistor", logo: logoTransistor },
                { name: "Tuple", logo: logoTuple },
                { name: "StaticKit", logo: logoStaticKit },
              ],
              [
                { name: "Mirage", logo: logoMirage },
                { name: "Laravel", logo: logoLaravel },
                { name: "Statamic", logo: logoStatamic },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image src={company.logo} alt={company.name} unoptimized />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    )
  }
