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
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    this.applyDarkMode();
  }

  toggleDarkMode(): void {
    // Alterna el estado
    this.isDarkMode = !this.isDarkMode;

    // Aplica el tema al body
    this.applyDarkMode();

    // Guarda la preferencia en localStorage
    localStorage.setItem('darkMode', String(this.isDarkMode));
  }

  private applyDarkMode(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
