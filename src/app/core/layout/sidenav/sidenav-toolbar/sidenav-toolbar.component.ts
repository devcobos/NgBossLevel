import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'sidenav-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './sidenav-toolbar.component.html',
  styleUrl: './sidenav-toolbar.component.scss',
})
export class SidenavToolbarComponent {
  @Output() menuClick = new EventEmitter<void>();

  isDarkMode = false;

  constructor() {
    // Recuperar preferencia guardada del usuario (si existe)
    const storedPreference = localStorage.getItem('darkMode');

    if (storedPreference !== null) {
      // Usar la preferencia almacenada en localStorage
      this.isDarkMode = storedPreference === 'true';
    } else {
      // Si no hay preferencia almacenada, usar la preferencia del sistema
      this.isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
    }

    this.applyDarkMode();
  }

  toggleDarkMode(): void {
    // Alterna el estado del tema
    this.isDarkMode = !this.isDarkMode;

    // Aplica el tema al body
    this.applyDarkMode();
  }

  private applyDarkMode(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('darkMode', String(this.isDarkMode));
  }
}
