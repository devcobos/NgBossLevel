import { effect, Injectable, signal } from '@angular/core';
import { CustomTheme, DarkThemes, LightThemes } from '@core/models/themes/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _isDarkMode = signal(false);
  private readonly _currentTheme = signal<CustomTheme>(LightThemes[0]);
  private readonly _availableThemes = signal<readonly CustomTheme[]>(LightThemes);

  constructor() {
    // Efecto para aplicar automáticamente el tema cuando cambia
    effect(() => {
      const theme = this._currentTheme();
      this.applyTheme(theme.class);
    });

    // Efecto para actualizar la lista de temas disponibles cuando cambia el modo
    effect(() => {
      const themes = this._isDarkMode() ? DarkThemes : LightThemes;
      this._availableThemes.set(themes);
    });
  }

  get isDarkMode() {
    return this._isDarkMode.asReadonly();
  }

  get getCurrentTheme() {
    return this._currentTheme.asReadonly();
  }

  get getAvailableThemes() {
    return this._availableThemes.asReadonly();
  }

  toggleDarkMode(): void {
    const newDarkMode = !this._isDarkMode();
    this._isDarkMode.set(newDarkMode);

    // Cambia al primer tema del conjunto correspondiente
    const theme = newDarkMode ? DarkThemes[0] : LightThemes[0];
    this._currentTheme.set(theme);
  }

  setTheme(theme: CustomTheme): void {
    this._currentTheme.set(theme);
  }

  private applyTheme(themeClass: string): void {
    document.body.classList.forEach((className) => {
      if (className.endsWith('-theme')) {
        document.body.classList.remove(className);
      }
    });

    document.body.classList.add(themeClass);
  }
}
