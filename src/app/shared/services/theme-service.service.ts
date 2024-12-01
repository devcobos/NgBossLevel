import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  setTheme(primary: string, tertiary: string) {
    // Modificar directamente las variables SCSS desde las clases dinámicas
    document.documentElement.style.setProperty('--primary-palette', primary);
    document.documentElement.style.setProperty('--tertiary-palette', tertiary);
  }
}
