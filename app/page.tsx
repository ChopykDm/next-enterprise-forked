import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TaxPal - Accounting made simple for small businesses",
  description:
    "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.",
}

export default function Page() {
  return (
    <>
    <Header />
      <main>
        <Hero />
        {/* <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
