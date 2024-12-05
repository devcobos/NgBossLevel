import { Component, Input } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

@Component({
  selector: 'navigation-basic-item',
  imports: [MatListItem, RouterModule],
  templateUrl: './navigation-basic-item.component.html',
  styleUrl: './navigation-basic-item.component.scss',
})
export class NavigationBasicItemComponent {
  @Input() item!: NavigationItem;
}
