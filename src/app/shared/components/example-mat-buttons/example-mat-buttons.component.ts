import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-mat-buttons',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './example-mat-buttons.component.html',
  styleUrl: './example-mat-buttons.component.scss',
})
export class ExampleMatButtonsComponent {}
