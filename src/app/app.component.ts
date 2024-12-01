import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '@core/layout/sidenav/sidenav.component';
import { ExampleMatButtonsComponent } from '@shared/components/example-mat-buttons/example-mat-buttons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidenavComponent, ExampleMatButtonsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NgBossLevel';
}
