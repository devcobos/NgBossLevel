import { Component, inject, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';
import { LayoutService } from '@core/services/layout.service';
import { NoSelectTextDirective } from '@shared/directives/no-select-text.directive';

@Component({
  selector: 'navigation-expandable-item',
  imports: [RouterModule, MatIcon, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle, NoSelectTextDirective],
  templateUrl: './navigation-expandable-item.component.html',
  styleUrl: './navigation-expandable-item.component.scss',
})
export class NavigationExpandableItemComponent {
  @Input() items!: NavigationItem[];

  private readonly _layoutService = inject(LayoutService);

  expandedIndex: number[] = [];

  get isMobile() {
    return this._layoutService.isMobile;
  }

  toggleSubItems(idx: number): void {
    const expandedIdx = this.expandedIndex.indexOf(idx);
    expandedIdx > -1 ? this.expandedIndex.splice(expandedIdx, 1) : this.expandedIndex.push(idx);
  }

  isExpanded(idx: number): boolean {
    return this.expandedIndex.includes(this._layoutService.selectedMenuIndex() ?? 0);
  }
}
