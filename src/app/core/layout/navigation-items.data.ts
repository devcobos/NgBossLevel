import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

export const NAVIGATION_ITEM: NavigationItem[] = [
  {
    icon: 'home',
    label: 'Home',
    route: '/home',
  },
  {
    icon: 'planet',
    label: 'RickDex',
    subItems: [
      {
        label: 'Characters',
        route: '/rickdex/characters',
      },
    ],
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
        subItems: [
          { label: 'MatButtons', route: '/examples/buttons/mat-buttons' },
          { label: 'ToogleButton', route: '' },
        ],
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
        subItems: [
          {
            label: 'Support',
            route: '/help/support',
          },
          {
            label: 'About',
            route: '/help/about',
          },
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
    ],
  },
];
