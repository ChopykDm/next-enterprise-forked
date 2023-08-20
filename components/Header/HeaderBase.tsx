import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { LanguageToggler } from './LanguageToggler'
import { MobileNavigation } from './MobileNavigation'
import { TFunction } from 'i18next'
import { NavItem, NavItemId, getHeaderLeftNavItems, getHeaderRightNavItems, getHomeNavItem } from '../../data/navItems'
import { Locales } from '@/i18n/settings'

const RightNavItem = ({ item, t }: { item: NavItem, t: TFunction }) => {
  if (item.id !== NavItemId.GetStarted) {
    return (
      <div className="hidden md:block">
        <NavLink href={item.id}>{t(item.label || '')}</NavLink>
      </div>
    );
  }

  if (item.id === NavItemId.GetStarted) {
    return (
      <Button href={item.href} color="blue">
        <span>
          {t('nav.get-started.p1')}{' '}<span className="hidden lg:inline">{t('nav.get-started.p2')}</span>
        </span>
      </Button>
    );
  }
};

export const HeaderBase: React.FC<{
  t: TFunction
  lng: Locales
}> = async ({ t, lng }) => {

  const homeNavItem = getHomeNavItem();
  const leftNavItems = getHeaderLeftNavItems();
  const rightNavItems = getHeaderRightNavItems();

  return (
    <header className="py-10">
      <Container className="">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            {homeNavItem && (
              <Link href={homeNavItem.href} aria-label={homeNavItem.ariaLabel ? t(homeNavItem.ariaLabel) : ''}>
                <Logo className="h-10 w-auto" />
              </Link>
            )}
            <div className="hidden md:flex md:gap-x-6">
              {leftNavItems.map((item) => (
                <NavLink key={item.id} href={item.href}>{t(item.label || '')}</NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <LanguageToggler />
            </div>
            {rightNavItems.map((item) => (
              <RightNavItem t={t} item={item} key={item.id} />
            ))}

            <div className="-mr-1 md:hidden">
              <MobileNavigation lng={lng} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
