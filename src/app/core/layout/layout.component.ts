import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '@core/layout/sidenav/sidenav.component';
import { ToolbarComponent } from '@core/layout/toolbar/toolbar.component';
import { VerticalToolbarComponent } from '@core/layout/vertical-toolbar/vertical-toolbar.component';
import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'layout',
  imports: [VerticalToolbarComponent, MatSidenavModule, SidenavComponent, ToolbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private readonly _layoutService = inject(LayoutService);

  get isMobile(): boolean {
    return this._layoutService.isMobile;
  }
}
