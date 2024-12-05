import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleMatButtonsComponent } from '@shared/components/example-mat-buttons/example-mat-buttons.component';
import { LayoutComponent } from './core/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExampleMatButtonsComponent, LayoutComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
