import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Episode } from '@core/interfaces/rickdex/rickdex.interfaces';
import { EpisodeService } from '@core/services/rickdex/episode.service';

export const RickDexEpisodeResolver: ResolveFn<Episode> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(EpisodeService).getEpisodeById(route.paramMap.get('idEpisode')!);
};
