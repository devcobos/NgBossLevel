import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '@shared/services/theme-service.service';

@Component({
  selector: 'sidenav-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './sidenav-toolbar.component.html',
  styleUrl: './sidenav-toolbar.component.scss',
})
export class SidenavToolbarComponent {
  @Output() menuClick = new EventEmitter<void>();

  private readonly _themeService = inject(ThemeService);

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode();
  }

  toggleDarkMode(): void {
    this._themeService.toggleTheme();
  }
}
