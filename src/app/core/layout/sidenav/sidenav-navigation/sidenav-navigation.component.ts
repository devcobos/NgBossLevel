import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { NavigationSubItem, NavigationSubSubItem } from '@core/models/sidenav/navigation-items.model';
import { LayoutService } from '@core/services/layout.service';
import { NoSelectTextDirective } from '@shared/directives/no-select-text.directive';

@Component({
  selector: 'sidenav-navigation',
  imports: [MatIcon, MatNavList, MatListItem, MatListItemTitle, NoSelectTextDirective],
  templateUrl: './sidenav-navigation.component.html',
  styleUrl: './sidenav-navigation.component.scss',
})
export class SidenavNavigationComponent {
  private readonly _layoutService = inject(LayoutService);

  get navigationSubItems(): NavigationSubItem[] {
    return this._layoutService.selectedParent?.subItems ?? [];
  }
  get selectedNavigationSubItems(): NavigationSubItem | null {
    return this._layoutService.selectedSubItem ?? null;
  }

  get isMobile() {
    return this._layoutService.isMobile;
  }

  handleSubItemNavigation(item: NavigationSubItem): void {
    this._layoutService.updateSubItemNavigation(item);
  }

  handleSubSubItemNavigation(item: NavigationSubSubItem): void {
    this._layoutService.updateSubSubItemNavigation(item);
  }
}
