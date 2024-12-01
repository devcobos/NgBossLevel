import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _isDarkMode = signal(this.getInitialTheme());

  get isDarkMode() {
    return this._isDarkMode.asReadonly();
  }

  toggleTheme() {
    const newTheme = !this._isDarkMode();
    this._isDarkMode.set(newTheme);
    this.persistTheme(newTheme);
    this.applyTheme(newTheme);
  }

  private getInitialTheme(): boolean {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme !== null) {
      return storedTheme === 'true';
    }

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.persistTheme(systemPreference);
    this.applyTheme(systemPreference);
    return systemPreference;
  }

  private persistTheme(isDarkMode: boolean) {
    localStorage.setItem('darkMode', String(isDarkMode));
  }

  private applyTheme(isDarkMode: boolean) {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }
}
