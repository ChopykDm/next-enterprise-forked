import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../lp-items"
import { Metadata } from 'next'
 
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
    <html lang="en">
      <body
        // suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}