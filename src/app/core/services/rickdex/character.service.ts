import { Injectable, inject } from '@angular/core';
import { Character, ListCharacterResponse } from '@core/interfaces/rickdex/rickdex.interfaces';
import { GET_CHARACTER, LIST_CHARACTERS } from '@core/services/rickdex/graphql/character.queries';
import { Apollo } from 'apollo-angular';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private _apollo: Apollo = inject(Apollo);

  public getCharacterById(idCharacter: string | number): Observable<Character> {
    return this._apollo
      .watchQuery<any>({
        query: GET_CHARACTER,
        variables: {
          idCharacter: idCharacter,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.character)
      );
  }

  public listCharacters(page: number): Observable<ListCharacterResponse> {
    return this._apollo
      .watchQuery<any>({
        query: LIST_CHARACTERS,
        variables: {
          page: page,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.characters)
      );
  }
}
