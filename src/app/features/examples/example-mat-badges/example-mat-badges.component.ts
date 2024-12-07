import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'example-mat-badges',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './example-mat-badges.component.html',
  styleUrl: './example-mat-badges.component.scss',
})
export class ExampleMatBadgesComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
