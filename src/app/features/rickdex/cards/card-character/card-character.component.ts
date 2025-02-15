import { NgStyle } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Character } from '@core/interfaces/rickdex/rickdex.interfaces';

@Component({
  selector: 'rickdex-card-character',
  imports: [MatCardModule, MatIconModule, NgStyle],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class RickDexCardCharacterComponent {
  @Input({ required: true }) character!: Character;

  private _router: Router = inject(Router);

  protected onClickTitle(idCharacter: number): void {
    if (idCharacter) {
      this._router.navigate(['rickdex/character', idCharacter]);
    }
  }

  protected onClickFirstSeen(idEpisode: number): void {
    if (idEpisode) {
      debugger;
      this._router.navigate(['rickdex/episode', idEpisode]);
    }
  }

  protected onClickLastKnownLocation(idLocation: number): void {
    if (idLocation) {
      this._router.navigate(['rickdex/location', idLocation]);
    }
  }

  protected getCharacterStatusStyle(status: string): any {
    switch (status) {
      case 'Dead':
        return { color: 'red' };
      case 'Alive':
        return { color: 'green' };
      case 'unknown':
      default:
        return { color: 'gray' };
    }
  }
}
