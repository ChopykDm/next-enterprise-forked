import { CallToAction } from "@/components/CallToAction"
import { Faqs } from "@/components/Faqs"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header/server"
import { Hero } from "@/components/Hero/server"
import { Pricing } from "@/components/Pricing"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { Services } from "@/components/Services/Services"
import { Testimonials } from "@/components/Testimonials"
import { Metadata } from "next"
import { Suspense } from "react"
import Loading from "./loading"
import { ContactUs } from "@/components/ContactUs/Faqs"
import { MainWrapper } from "@/components/MainWrapper"


// TODO: add metadata localization
export const metadata: Metadata = {
  title: "Chopyk Agency Building Tomorrow's Online Experiences",
  description:
    "Innovative Design, Robust Development, and Continuous Support to Bring Your Digital Vision to Life",
}


const colors = {
  '30': [166, 255, 150],
  '38': [19, 117, 71],
}

// @ts-ignore
export default function Page({ params: { lng } }) {
  return (
    <>
      <Header lng={lng} />
      <main>
        <Suspense fallback={<Loading />}>
          <Hero lng={lng} />
          <MainWrapper>
            <Services lng={lng}/>
            {/* <PrimaryFeatures />
            <SecondaryFeatures /> */}
            <CallToAction />
            <CallToAction />
            {/* <Testimonials /> */}
            {/* <Pricing /> */}
            {/* <Faqs /> */}
            {/* Contact Us */}
            <ContactUs />
          </MainWrapper>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
