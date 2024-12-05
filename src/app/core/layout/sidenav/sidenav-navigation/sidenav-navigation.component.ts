import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'sidenav-navigation',
  imports: [MatListModule],
  templateUrl: './sidenav-navigation.component.html',
  styleUrl: './sidenav-navigation.component.scss',
})
export class SidenavNavigationComponent {
  fillerNav = Array.from({ length: 25 }, (_, i) => `Nav Item ${i + 1}`);
}
