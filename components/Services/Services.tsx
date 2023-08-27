'use client';

//@ts-nocheck
import clsx from 'clsx'
import { useId } from 'react'

import { Container } from '@/components/Container'
import { ServiceBlock, ServiceCategory, services, Service as ServiceType } from '@/data/services';
import { R } from '@storybook/react/dist/types-0a347bb9';

function ReportingIcon() {
  const id = useId()
  return (
    <>
      <defs>
        <linearGradient
          id={id}
          x1="11.5"
          y1={18}
          x2={36}
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".194" stopColor="#fff" />
          <stop offset={1} stopColor="#6692F1" />
        </linearGradient>
      </defs>
      <path
        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

function InventoryIcon() {
  return (
    <>
      <path
        opacity=".5"
        d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
        fill="#fff"
      />
      <path
        opacity=".3"
        d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
        fill="#fff"
      />
      <path
        d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
        fill="#fff"
      />
    </>
  )
}

function ContactsIcon() {
  return (
    <>
      <path
        opacity=".5"
        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
        fill="#fff"
      />
      <path
        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
        fill="#fff"
      />
    </>
  )
}

const serviceIcons: Record<ServiceCategory, React.ComponentType> = {
  [ServiceCategory.Engineering]: ReportingIcon,
  [ServiceCategory.Optimization]: InventoryIcon,
  [ServiceCategory.Advisory]: ContactsIcon,
};

function ServiceBlock({ serviceBlock, className, ...props }: {
  serviceBlock: ServiceBlock
  className?: string
}) {
  const ServiceIcon = serviceIcons[serviceBlock.category];

  return (
    <div
      className={clsx(className)}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <ServiceIcon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          'text-primary-600'
        )}
      >
        {serviceBlock.title}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {serviceBlock.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{serviceBlock.description}</p>
      <p className="mt-4 text-sm text-slate-600">
        <ul className='list-disc list-inside'>
          {serviceBlock.services.map((service) => (
            <li key={service.title}>
              <Service service={service} />
            </li>
          ))}
        </ul>
      </p>
    </div>
  )
}

export const Service: React.FC<{ service: ServiceType }> = ({ service }) => {
  return (
    service.title
  );
}

// function ServicesMobile() {
//   return (
//     <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
//       {features.map((feature) => (
//         <div key={feature.name}>
//           <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
//           <div className="relative mt-10 pb-10">
//             <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
//             <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
//               <Image
//                 className="w-full"
//                 src={feature.image}
//                 alt=""
//                 sizes="52.75rem"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

function ServicesDesktop() {
  return (
    <div className="lg:mt-20 flex gap-4 flex-wrap md:flex-nowrap">
          {services.map((serviceBlock, serviceIndex) => (
            <ServiceBlock
              key={serviceBlock.category}
              serviceBlock={serviceBlock}
              className="relative"
            />
          ))}
    </div>
  )
}

export function Services() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our Expertise at Your Service
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Discover a range of digital services tailored to elevate your business in today's interconnected world.
          </p>
        </div>
        {/* <ServicesMobile /> */}
        <ServicesDesktop />
      </Container>
    </section>
  )
}
