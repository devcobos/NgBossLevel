import { Component, inject } from '@angular/core';
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
  private readonly _layoutService = inject(LayoutService);

  get isMobile(): boolean {
    return this._layoutService.isMobile;
  }

  get isOpened() {
    return this._layoutService.isOpenSidenav;
  }
}
