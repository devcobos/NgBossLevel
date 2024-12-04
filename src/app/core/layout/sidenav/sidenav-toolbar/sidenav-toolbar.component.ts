import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomTheme } from '@core/models/themes/theme.model';
import { ThemeService } from '@core/services/theme-service.service';
import { ToggleButtonComponent } from '@shared/components/toggle-button/toggle-button.component';

@Component({
  selector: 'sidenav-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, ToggleButtonComponent],
  templateUrl: './sidenav-toolbar.component.html',
  styleUrl: './sidenav-toolbar.component.scss',
})
export class SidenavToolbarComponent {
  @Output() menuClick = new EventEmitter<void>();

  xPosition: MenuPositionX = 'before';
  yPosition: MenuPositionY = 'below';

  private readonly _themeService = inject(ThemeService);

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode;
  }

  get avalibleThemes() {
    return this._themeService.getAvailableThemes;
  }

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

  setTheme(theme: CustomTheme): void {
    this._themeService.setTheme(theme);
  }
}
