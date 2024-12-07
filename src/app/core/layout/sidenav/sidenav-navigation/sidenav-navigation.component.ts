import { Component } from '@angular/core';
import { NavigationExpandableItemComponent } from '@core/layout/sidenav/sidenav-navigation/navigation-expandable-item/navigation-expandable-item.component';
import { MockNavigationItems } from '@core/layout/sidenav/sidenav-navigation/navigation-items.data';

@Component({
  selector: 'sidenav-navigation',
  imports: [NavigationExpandableItemComponent],
  templateUrl: './sidenav-navigation.component.html',
  styleUrl: './sidenav-navigation.component.scss',
})
export class SidenavNavigationComponent {
  mockNavigationItems = MockNavigationItems;
}
