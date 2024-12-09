import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemTitle, MatNavList } from '@angular/material/list';
import { SecondaryNavigationItem, TertiaryNavigationItem } from '@core/models/sidenav/navigation-items.model';
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

  get secondaryItems(): SecondaryNavigationItem[] {
    return this._layoutService.selectedParent?.subItems ?? [];
  }
  get selectedSecondaryItem(): SecondaryNavigationItem | null {
    return this._layoutService.selectedSecondaryItem ?? null;
  }

  handleSecondaryNavigation(item: SecondaryNavigationItem): void {
    this._layoutService.updateSecondaryNavigationItem(item);
  }

  handleTertiarityNavigation(item: TertiaryNavigationItem): void {
    this._layoutService.updateTertiaryItemNavigationItem(item);
  }
}
