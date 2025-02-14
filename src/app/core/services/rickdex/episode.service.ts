import { Injectable, inject } from '@angular/core';
import { Episode, ListEpisodeResponse } from '@core/interfaces/rickdex/rickdex.interfaces';
import { GET_EPISODE, LIST_EPISODES } from '@core/services/rickdex/graphql/episode.queries';
import { Apollo } from 'apollo-angular';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private _apollo: Apollo = inject(Apollo);

  public getEpisodeById(idEpisode: number | string): Observable<Episode> {
    return this._apollo
      .watchQuery<any>({
        query: GET_EPISODE,
        variables: {
          idEpisode: idEpisode,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.episode)
      );
  }

  public listEpisodesBySeason(season: string | number): Observable<ListEpisodeResponse> {
    return this._apollo
      .watchQuery<any>({
        query: LIST_EPISODES,
        variables: {
          season: this.formatToSeason(season),
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.episodes)
      );
  }

  private formatToSeason(season: string | number): string {
    let number: number = typeof season === 'string' ? parseInt(season, 10) : season;
    if (isNaN(number) || number < 1 || number > 99) {
      throw new Error('El input debe ser un número entre 1 y 99.');
    }
    return `S${number.toString().padStart(2, '0')}`;
  }
}
