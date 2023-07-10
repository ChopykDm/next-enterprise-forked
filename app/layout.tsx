import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../lp-items"
import { Metadata } from 'next'
import { PreloadResources } from "./preload-resources"

import "../styles/tailwind.css"
 
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    >
      <body
        // suppressHydrationWarning={true}
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