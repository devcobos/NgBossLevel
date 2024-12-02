import { effect, Injectable, signal } from '@angular/core';
import { CustomTheme, CustomThemeStorage, DarkThemes, LightThemes } from '@core/models/themes/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Clave de almacenamiento en localStorage
  private static readonly STORAGE_KEY = 'themeStorage';

  // Señal centralizada que almacena el estado completo de los temas
  private readonly _themeStorage = signal<CustomThemeStorage>(
    this.loadThemeFromStorage() || {
      ligthTheme: LightThemes[0],
      darkTheme: DarkThemes[0],
      isDarkMode: this.getPrefersColorSchemeDark(),
    }
  );

  constructor() {
    // Efecto para aplicar el tema actual automáticamente cuando cambia el estado
    effect(() => {
      const storage = this._themeStorage();
      const themeClass = storage.isDarkMode ? storage.darkTheme.class : storage.ligthTheme.class;
      this.applyTheme(themeClass);

      // Persistir en localStorage
      this.saveThemeToStorage(storage);
    });
  }

  // Getters para acceder a partes del estado de forma reactiva
  get isDarkMode(): boolean {
    return this._themeStorage().isDarkMode;
  }

  get getCurrentTheme(): CustomTheme {
    return this._themeStorage().isDarkMode ? this._themeStorage().darkTheme : this._themeStorage().ligthTheme;
  }

  get getAvailableThemes(): readonly CustomTheme[] {
    return this._themeStorage().isDarkMode ? DarkThemes : LightThemes;
  }

  // Alternar entre modo claro y oscuro
  toggleDarkMode(): void {
    const storage = this._themeStorage();
    this._themeStorage.set({
      ...storage,
      isDarkMode: !storage.isDarkMode,
    });
  }

  // Establecer un tema personalizado para el modo actual
  setTheme(theme: CustomTheme): void {
    const storage = this._themeStorage();
    if (storage.isDarkMode) {
      this._themeStorage.set({
        ...storage,
        darkTheme: theme,
      });
    } else {
      this._themeStorage.set({
        ...storage,
        ligthTheme: theme,
      });
    }
  }

  // Aplicar la clase del tema al body
  private applyTheme(themeClass: string): void {
    document.body.classList.forEach((className) => {
      if (className.endsWith('-theme')) {
        document.body.classList.remove(className);
      }
    });

    document.body.classList.add(themeClass);
  }

  private getPrefersColorSchemeDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Cargar el estado desde localStorage
  private loadThemeFromStorage(): CustomThemeStorage | null {
    const storedData = localStorage.getItem(ThemeService.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  }

  // Guardar el estado en localStorage
  private saveThemeToStorage(storage: CustomThemeStorage): void {
    localStorage.setItem(ThemeService.STORAGE_KEY, JSON.stringify(storage));
  }
}
