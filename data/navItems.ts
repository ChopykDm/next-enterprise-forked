export enum NavItemHeaderPosition {
  Left = 'left',
  Right = 'right',
}

export enum NavItemId {
  Home = 'home',
  Features = 'features',
  Testimonials = 'testimonials',
  Pricing = 'pricing',
  SignIn = 'sign-in',
  GetStarted = 'get-started',
}

export type NavItem = {
  label?: string;
  ariaLabel?: string;
  href: string;
  headerPosition: NavItemHeaderPosition;
  id: NavItemId;
};

export const navItems: Array<NavItem> = [
  {
    id: NavItemId.Home,
    ariaLabel: 'nav.home.aria-label',
    href: '#',
    headerPosition: NavItemHeaderPosition.Left,
  },
  {
    id: NavItemId.Features,
    label: 'nav.features',
    href: '#features',
    headerPosition: NavItemHeaderPosition.Left,
  },
  {
    id: NavItemId.Testimonials,
    label: 'nav.testimonials',
    href: '#testimonials',
    headerPosition: NavItemHeaderPosition.Left,
  },
  {
    id: NavItemId.Pricing,
    label: 'nav.pricing',
    href: '#pricing',
    headerPosition: NavItemHeaderPosition.Left,
  },
  {
    id: NavItemId.SignIn,
    label: 'nav.sign-in',
    href: '/login',
    headerPosition: NavItemHeaderPosition.Right,
  },
  {
    id: NavItemId.GetStarted,
    href: '/register',
    headerPosition: NavItemHeaderPosition.Right,
  }
];

export const getHomeNavItem = () => navItems.find((item) => item.id === NavItemId.Home);
export const getHeaderLeftNavItems = () => navItems.filter((item) => item.headerPosition === NavItemHeaderPosition.Left);
export const getHeaderRightNavItems = () => navItems.filter((item) => item.headerPosition === NavItemHeaderPosition.Right);