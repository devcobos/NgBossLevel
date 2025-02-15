import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LocationInterface } from '@core/interfaces/rickdex/rickdex.interfaces';
import { LocationService } from '@core/services/rickdex/location.service';

export const locationResolver: ResolveFn<LocationInterface> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(LocationService).getLocationById(route.paramMap.get('idLocation')!);
};
