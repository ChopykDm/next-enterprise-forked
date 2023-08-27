'use client';

// @ts-nocheck

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll,
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses,
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns,
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
  },
  {
    title: 'VAT handling 2',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns,
  },
  {
    title: 'Reporting 2',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
  },
]

export function ServicesTemp() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="services"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-primary-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-primary-100">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center gap-4 overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
          {features.map((feature, featureIndex) => (
            <div
              key={feature.title}
              className={clsx(
                'basis-1/4 group relative rounded-full px-4 py-1 lg:rounded-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10',
              )}
            >
              <h3 className='font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-primary-600 lg:text-white'>

                <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                {feature.title}
              </h3>
              <p
                className={clsx(
                  'mt-2 hidden text-sm lg:block',
                  'text-primary-100 group-hover:text-white'
                )}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
