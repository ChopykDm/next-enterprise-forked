import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../../lp-items"
import { Metadata } from 'next'
import { PreloadResources } from "./preload-resources"
import { dir } from 'i18next'

import "../../styles/tailwind.css"
import { languages } from "@/i18n/settings"
import { useAppStore } from "@/store/appStore"
import { Source_Code_Pro, Noto_Sans } from 'next/font/google'
import clsx from "clsx"

const sourceCodePro = Source_Code_Pro({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-sourcecodepro',
});

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: '500',
  display: 'swap',
  variable: '--font-notosans',
});

export const metadata: Metadata = {
  title: 'My Page Title',
  openGraph: {
    title: 'My Page Title',
    description: 'My page description',
    url: 'https://example.com/page',
    type: 'website',
    countryName: 'Ukraine',
    locale: 'en_UA',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: {
    lng: string
  }
}) {
  useAppStore.setState({ lang: lng });

  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={
        clsx(
          "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']",
          //sourceCodePro.className,
          sourceCodePro.variable,
          notoSans.variable
        )
      }
    >
      <body
        suppressHydrationWarning={true}
        className="flex h-full flex-col"
      >
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <PreloadResources />
        {children}
      </body>
    </html>
  )
}