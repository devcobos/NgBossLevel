import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'example-mat-cards',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './example-mat-cards.component.html',
  styleUrl: './example-mat-cards.component.scss',
})
export class ExampleMatCardsComponent {}
