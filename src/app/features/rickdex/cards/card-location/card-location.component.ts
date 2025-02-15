import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LocationInterface } from '@core/interfaces/rickdex/rickdex.interfaces';
import { RickDexCardCharacterComponent } from '@features/rickdex/cards/card-character/card-character.component';

@Component({
  selector: 'rickdex-card-location',
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, RickDexCardCharacterComponent],
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss'],
})
export class RickDexCardLocationComponent {
  @Input({ required: true }) location!: LocationInterface;
  @Input() loadCharacters: boolean = false;

  private _router: Router = inject(Router);

  protected navigateToDetailLocation(idLocation: number): void {
    if (idLocation) {
      this._router.navigate(['/location', idLocation]);
    }
  }
}
