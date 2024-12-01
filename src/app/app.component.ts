import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '@core/layout/sidenav/sidenav.component';
import { ThemeService } from '@shared/services/theme-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'NgBossLevel';

  private readonly _themeService = inject(ThemeService);
  private readonly _cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    // Recupera la preferencia de dark mode del almacenamiento local
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    // Alterna la clase 'dark-mode'
    const isDarkMode = document.body.classList.toggle('dark-mode');
    // Guarda la preferencia en localStorage
    localStorage.setItem('darkMode', String(isDarkMode));
  }
}
