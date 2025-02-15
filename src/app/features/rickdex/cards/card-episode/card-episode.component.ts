import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Episode } from '@core/interfaces/rickdex/rickdex.interfaces';
import { RickDexCardCharacterComponent } from '@features/rickdex/cards/card-character/card-character.component';

@Component({
  selector: 'rickdex-card-episode',
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, RickDexCardCharacterComponent],
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
})
export class RickDexCardEpisodeComponent {
  @Input({ required: true }) episode!: Episode;
  @Input() loadCharacters: boolean = false;

  private _router: Router = inject(Router);

  protected navigateToDetailEpisode(idEpisode: number): void {
    if (idEpisode) {
      this._router.navigate(['/episode', idEpisode]);
    }
  }
}
