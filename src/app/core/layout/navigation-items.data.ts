import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

export const MockNavigationItems: NavigationItem[] = [
  {
    icon: 'home',
    label: 'Home',
    route: '/home',
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
        label: 'Profile',
        route: '/settings/profile',
      },
      {
        label: 'Security',
        route: '/settings/security',
      },
    ],
  },
  {
    icon: 'help',
    label: 'Help',
    route: '/help',
    subItems: [
      {
        label: 'Support',
        route: '/help/support',
      },
      {
        label: 'About',
        route: '/help/about',
      },
    ],
  },
];
