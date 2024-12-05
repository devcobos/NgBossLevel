import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from '@core/layout/sidenav/sidenav.component';
import { ToolbarComponent } from '@core/layout/toolbar/toolbar.component';

@Component({
  selector: 'layout',
  imports: [ToolbarComponent, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild(SidenavComponent) sidenav!: SidenavComponent;

  get getIsMobile(): boolean {
    return false;
  }

  toggleSidenav(): void {
    this.sidenav.toggleSidenav();
  }
}
