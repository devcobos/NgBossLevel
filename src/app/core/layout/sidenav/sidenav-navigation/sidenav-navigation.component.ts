import { Component, inject } from '@angular/core';
import { NavigationExpandableItemComponent } from '@core/layout/sidenav/sidenav-navigation/navigation-expandable-item/navigation-expandable-item.component';
import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'sidenav-navigation',
  imports: [NavigationExpandableItemComponent],
  templateUrl: './sidenav-navigation.component.html',
  styleUrl: './sidenav-navigation.component.scss',
})
export class SidenavNavigationComponent {
  private readonly _layoutService = inject(LayoutService);

  mockNavigationItems = this._layoutService.getNavigationItems;
}
