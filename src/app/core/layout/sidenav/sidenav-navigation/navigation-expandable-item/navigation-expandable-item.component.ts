import { Component, Input } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListModule } from '@angular/material/list';
import { NavigationBasicItemComponent } from '@core/layout/sidenav/sidenav-navigation/navigation-basic-item/navigation-basic-item.component';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

@Component({
  selector: 'navigation-expandable-item',
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    NavigationBasicItemComponent,
    MatListItem,
    MatIcon,
    MatListModule,
  ],
  templateUrl: './navigation-expandable-item.component.html',
  styleUrl: './navigation-expandable-item.component.scss',
})
export class NavigationExpandableItemComponent {
  @Input() item!: NavigationItem;
}
