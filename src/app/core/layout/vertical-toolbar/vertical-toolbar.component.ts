import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule, MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';
import { CustomTheme } from '@core/models/themes/theme.model';
import { LayoutService } from '@core/services/layout.service';
import { ThemeService } from '@core/services/theme-service.service';
import { ToggleButtonComponent } from '@shared/components/toggle-button/toggle-button.component';
import { VerticalButtonComponent } from '@shared/components/vertical-button/vertical-button.component';

@Component({
  selector: 'layout-vertical-toolbar',
  imports: [VerticalButtonComponent, MatToolbarModule, MatIconButton, ToggleButtonComponent, MatMenuModule, MatIcon],
  templateUrl: './vertical-toolbar.component.html',
  styleUrl: './vertical-toolbar.component.scss',
})
export class VerticalToolbarComponent {
  private readonly _layoutService = inject(LayoutService);
  private readonly _themeService = inject(ThemeService);

  xPosition: MenuPositionX = 'before';
  yPosition: MenuPositionY = 'below';

  get navigationItems(): NavigationItem[] {
    return this._layoutService.getNavigationItems;
  }

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode;
  }

  get avalibleThemes() {
    return this._themeService.getAvailableThemes;
  }

  get isOpenSidenav() {
    return this._layoutService.isOpenSidenav;
  }

  handleNavigation(item: NavigationItem): void {
    this._layoutService.updateParentNavigationItem(item);
  }

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

  setTheme(theme: CustomTheme): void {
    this._themeService.setTheme(theme);
  }
}
