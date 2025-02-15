import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { Episode } from '@core/interfaces/rickdex/rickdex.interfaces';
import { EpisodeService } from '@core/services/rickdex/episode.service';
import { RickDexCardEpisodeComponent } from '@features/rickdex/cards/card-episode/card-episode.component';

@Component({
  selector: 'rickdex-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss'],
  imports: [RickDexCardEpisodeComponent, MatIcon, MatDivider, MatButtonModule],
})
export class ListEpisodesComponent implements OnInit {
  private _episodeService: EpisodeService = inject(EpisodeService);
  _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  protected episodes!: Episode[];
  protected currentSeason: number = 1;

  ngOnInit(): void {
    this.loadEpisodes(this.currentSeason);
  }

  protected loadEpisodes(season: number): void {
    this._episodeService.listEpisodesBySeason(season).subscribe((response) => (this.episodes = response.results));

    this._ref.detectChanges();
  }
}
