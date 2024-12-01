import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './core/layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgBossLevel';
}
