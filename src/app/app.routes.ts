import { Route } from '@angular/router';
import { LayoutGuard } from '@core/guards/layout.guard';
import { RickDexEpisodeResolver } from '@core/resolvers/rickdex/episode.resolvers';
import { RickDexLocationResolver } from '@core/resolvers/rickdex/location.resolvers';

export const EXAMPLES_ROUTES: Route[] = [
  {
    path: 'buttons',
    children: [
      {
        path: 'mat-buttons',
        loadComponent: () =>
          import('@features/examples/example-mat-buttons/example-mat-buttons.component').then(
            (m) => m.ExampleMatButtonsComponent
          ),
      },
    ],
  },
  {
    path: 'mat-cards',
    loadComponent: () =>
      import('@features/examples/example-mat-cards/example-mat-cards.component').then(
        (m) => m.ExampleMatCardsComponent
      ),
  },
  {
    path: 'mat-badges',
    loadComponent: () =>
      import('@features/examples/example-mat-badges/example-mat-badges.component').then(
        (m) => m.ExampleMatBadgesComponent
      ),
  },
];

export const RICKDEX_ROUTES: Route[] = [
  {
    path: 'characters',
    loadComponent: () =>
      import('@features/rickdex/list-characters/list-characters.component').then((m) => m.ListCharactersComponent),
  },
  {
    path: 'episode/:idEpisode',
    loadComponent: () =>
      import('@features/rickdex/detail-episode/detail-episode.component').then((m) => m.DetailEpisodeComponent),
    resolve: { episode: RickDexEpisodeResolver },
  },
  {
    path: 'location/:idLocation',
    loadComponent: () =>
      import('@features/rickdex/detail-location/detail-location.component').then((m) => m.DetailLocationComponent),
    resolve: { location: RickDexLocationResolver },
  },
];

// app.routes.ts
export const ROUTES: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('@features/home/home.component').then((m) => m.HomeComponent),
    canActivate: [LayoutGuard],
  },
  {
    path: 'rickdex',
    children: RICKDEX_ROUTES,
    canActivate: [LayoutGuard],
  },
  {
    path: 'examples',
    children: EXAMPLES_ROUTES,
    canActivate: [LayoutGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
