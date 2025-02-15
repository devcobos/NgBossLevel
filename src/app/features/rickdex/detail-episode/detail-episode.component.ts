import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '@core/interfaces/rickdex/rickdex.interfaces';
import { RickDexCardEpisodeComponent } from '@features/rickdex/cards/card-episode/card-episode.component';

@Component({
  selector: 'rickdex-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss'],
  imports: [RickDexCardEpisodeComponent],
})
export class DetailEpisodeComponent implements OnInit {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  episode!: Episode;

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ episode }) => {
      this.episode = episode;
    });
    this._ref.detectChanges();
  }
}
