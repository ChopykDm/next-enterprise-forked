import { CallToAction } from "@/components/CallToAction"
import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header/server"
import { Hero } from "@/components/Hero/server"
import { Pricing } from "@/components/Pricing"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { Testimonials } from "@/components/Testimonials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TaxPal - Accounting made simple for small businesses",
  description:
    "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.",
}

// @ts-ignore
export default function Page({ params: { lng } }) {
  return (
    <>
    <Header lng={lng} />
      <main>
        <Hero lng={lng} />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
