import { Component, inject, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { SidenavNavigationComponent } from '@core/layout/sidenav/sidenav-navigation/sidenav-navigation.component';
import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'layout-sidenav',
  imports: [MatSidenavContainer, MatSidenavContent, MatSidenav, SidenavNavigationComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild('snav') snav!: MatSidenav;

  private readonly _layoutService = inject(LayoutService);

  get isMobile(): boolean {
    return this._layoutService.isMobile;
  }

  get isOpened() {
    if (this.isMobile) {
    }

    return this._layoutService.hasSelectedItemSubItems;
  }

  toggleSidenav() {
    this.snav.toggle();
  }
}
