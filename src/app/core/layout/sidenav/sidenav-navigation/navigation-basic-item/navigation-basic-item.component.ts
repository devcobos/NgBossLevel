import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

@Component({
  selector: 'navigation-basic-item',
  imports: [RouterModule, MatIcon, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle],
  templateUrl: './navigation-basic-item.component.html',
  styleUrl: './navigation-basic-item.component.scss',
})
export class NavigationBasicItemComponent {
  @Input() items!: NavigationItem[];
}
