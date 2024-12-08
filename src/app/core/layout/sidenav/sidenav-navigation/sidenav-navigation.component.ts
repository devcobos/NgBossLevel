import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemTitle, MatNavList } from '@angular/material/list';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';
import { LayoutService } from '@core/services/layout.service';
import { NoSelectTextDirective } from '@shared/directives/no-select-text.directive';

@Component({
  selector: 'sidenav-navigation',
  imports: [MatIcon, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle, NoSelectTextDirective],
  templateUrl: './sidenav-navigation.component.html',
  styleUrl: './sidenav-navigation.component.scss',
})
export class SidenavNavigationComponent {
  private readonly _layoutService = inject(LayoutService);

  get navigationItems(): NavigationItem[] | null {
    if (this.isMobile) {
      return null;
    }

    const subItems = this._layoutService.getTopLevelItem?.subItems;
    if (!subItems) return null;

    return subItems;
  }

  get isMobile() {
    return this._layoutService.isMobile;
  }

  handleNavigation(item: NavigationItem): void {
    this._layoutService.selectNavigationItem(item);
  }
}
