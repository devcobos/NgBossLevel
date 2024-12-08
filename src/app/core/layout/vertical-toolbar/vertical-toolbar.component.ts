import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule, MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CustomTheme } from '@core/models/themes/theme.model';
import { LayoutService } from '@core/services/layout.service';
import { ThemeService } from '@core/services/theme-service.service';
import { ToggleButtonComponent } from '@shared/components/toggle-button/toggle-button.component';
import { VerticalButtonComponent } from '@shared/components/vertical-button/vertical-button.component';

@Component({
  selector: 'layout-vertical-toolbar',
  imports: [VerticalButtonComponent, MatToolbarModule, ToggleButtonComponent, MatMenuModule, MatIcon],
  templateUrl: './vertical-toolbar.component.html',
  styleUrl: './vertical-toolbar.component.scss',
})
export class VerticalToolbarComponent {
  private readonly _layoutService = inject(LayoutService);
  private readonly _themeService = inject(ThemeService);
  private readonly _router = inject(Router);

  navigationItems = this._layoutService.getNavigationItems;
  xPosition: MenuPositionX = 'before';
  yPosition: MenuPositionY = 'below';

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode;
  }

  get avalibleThemes() {
    return this._themeService.getAvailableThemes;
  }

  handleNavigation(idx: number): void {
    const selectedItem = this.navigationItems()[idx];
    this._layoutService.selectMenuIndex(idx);
    if (!this._layoutService.hasSelectedMenuSubItems) {
      this._router.navigate([selectedItem.route]); // Redirige a la ruta del ítem clicado
    }
  }

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

  setTheme(theme: CustomTheme): void {
    this._themeService.setTheme(theme);
  }
}
