'use client';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MobileNavLink } from './MobileNavLink'
import { MobileNavIcon } from './MobileNavIcon'
import { getHeaderLeftNavItems, getHeaderRightNavItems } from '@/data/navItems';
import { TFunction } from 'i18next';
import { useTranslation } from '@/i18n/client';
import { useAppStore } from '@/store/appStore';
import { Locales } from '@/i18n/settings';

export const MobileNavigation: React.FC<{
  lng: Locales
}> = ({ lng }) => {
  const leftNavItems = getHeaderLeftNavItems();
  const rightNavItems = getHeaderRightNavItems();
  const { t } = useTranslation(lng, 'header')

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {leftNavItems.map(({ href, label, id }) => (
              <MobileNavLink href={href} key={id}>{t(label || '')}</MobileNavLink>
            ))}
            <hr className="m-2 border-slate-300/40" />
            {rightNavItems.map(({ href, label, id }) => (
              <MobileNavLink href={href} key={id}>{t(label || '')}</MobileNavLink>
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
