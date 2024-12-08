import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '@core/layout/sidenav/sidenav.component';
import { VerticalToolbarComponent } from '@core/layout/vertical-toolbar/vertical-toolbar.component';

@Component({
  selector: 'layout',
  imports: [VerticalToolbarComponent, MatSidenavModule, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
