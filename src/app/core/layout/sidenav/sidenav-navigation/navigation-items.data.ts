import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

export const MockNavigationItems: NavigationItem[] = [
  {
    icon: 'home',
    label: 'Home',
    route: '/',
    subItems: [],
  },
  {
    icon: 'apps',
    label: 'Examples',
    subItems: [
      {
        label: 'Badges',
        route: '/examples/mat-badges',
      },
      {
        label: 'Buttons',
        route: '/examples/mat-buttons',
      },
      {
        label: 'Cards',
        route: '/examples/mat-cards',
      },
    ],
  },
  {
    icon: 'settings',
    label: 'Settings',
    route: '/settings',
    subItems: [
      {
        icon: 'account_circle',
        label: 'Profile',
        route: '/settings/profile',
        subItems: [],
      },
      {
        icon: 'security',
        label: 'Security',
        route: '/settings/security',
        subItems: [],
      },
    ],
  },
  {
    icon: 'help',
    label: 'Help',
    route: '/help',
    subItems: [
      {
        icon: 'contact_support',
        label: 'Support',
        route: '/help/support',
        subItems: [],
      },
      {
        icon: 'info',
        label: 'About',
        route: '/help/about',
        subItems: [],
      },
    ],
  },
];
