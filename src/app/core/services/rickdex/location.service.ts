import { Injectable, inject } from '@angular/core';
import { ListLocationResponse, LocationInterface } from '@core/interfaces/rickdex/rickdex.interfaces';
import { GET_LOCATION, LIST_LOCATIONS } from '@core/services/rickdex/graphql/location.queries';
import { Apollo } from 'apollo-angular';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _apollo: Apollo = inject(Apollo);

  public getLocationById(idLocation: number | string): Observable<LocationInterface> {
    return this._apollo
      .watchQuery<any>({
        query: GET_LOCATION,
        variables: {
          idLocation: idLocation,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.location)
      );
  }

  public listLocations(page: number): Observable<ListLocationResponse> {
    return this._apollo
      .watchQuery<any>({
        query: LIST_LOCATIONS,
        variables: {
          page: page,
        },
      })
      .valueChanges.pipe(
        take(1),
        map((response) => response.data.locations)
      );
  }
}
