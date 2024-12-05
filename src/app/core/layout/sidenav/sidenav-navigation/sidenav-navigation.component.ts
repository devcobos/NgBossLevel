import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

@Component({
  selector: 'sidenav-navigation',
  imports: [RouterModule, MatNavList, MatIcon, MatListModule],
  templateUrl: './sidenav-navigation.component.html',
  styleUrl: './sidenav-navigation.component.scss',
})
export class SidenavNavigationComponent {
  mockNavigationItems: NavigationItem[] = [
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      subItems: [],
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      subItems: [
        {
          icon: 'analytics',
          label: 'Analytics',
          route: '/dashboard/analytics',
          subItems: [],
        },
        {
          icon: 'insights',
          label: 'Insights',
          route: '/dashboard/insights',
          subItems: [],
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
}
