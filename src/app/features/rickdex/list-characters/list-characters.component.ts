import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Character, ListCharacterResponse } from '@core/interfaces/rickdex/rickdex.interfaces';
import { CharacterService } from '@core/services/rickdex/character.service';
import { RickDexCardCharacterComponent } from '@features/rickdex/card-character/card-character.component';

@Component({
  selector: 'list-characters',
  imports: [RickDexCardCharacterComponent],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.scss',
})
export class ListCharactersComponent {
  _characterService: CharacterService = inject(CharacterService);
  _scrollDispatcher: ScrollDispatcher = inject(ScrollDispatcher);
  _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  private isLoadingCharacters = false;
  private intervalId: any;
  protected characters: Character[] = [];
  private currentPage = 1;
  private loadMorePages = true;

  ngOnInit(): void {
    this.loadCharacters(); // Carga inicial sin retraso
    this.intervalId = window.setInterval(() => {
      this.loadCharacters();
    }, 350);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando el componente se destruya
    }
  }

  private loadCharacters(): void {
    if (!this.loadMorePages || this.isLoadingCharacters) {
      return;
    }

    this.isLoadingCharacters = true;
    this._characterService.listCharacters(this.currentPage).subscribe({
      next: (data: ListCharacterResponse) => {
        this.characters = [...this.characters, ...data.results];
        this.currentPage++;
        this.isLoadingCharacters = false;
        if (!data.info.next) this.loadMorePages = false;
      },
      error: () => {
        this.isLoadingCharacters = false;
      },
    });

    this._ref.detectChanges();
  }

  protected onClickTitle(urlCharacter: string) {
    console.log(urlCharacter);
  }

  protected onClickLastKnownLocation(urlLocation: string) {
    console.log(urlLocation);
  }

  protected onClickFirstSeen(urlEpisode: string) {
    console.log(urlEpisode);
  }
}
