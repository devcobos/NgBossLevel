import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'examples',
    children: [
      {
        path: 'mat-buttons',
        loadComponent: () =>
          import('@features/examples/example-mat-buttons/example-mat-buttons.component').then(
            (m) => m.ExampleMatButtonsComponent,
          ),
      },
      {
        path: 'mat-cards',
        loadComponent: () =>
          import('@features/examples/example-mat-cards/example-mat-cards.component').then(
            (m) => m.ExampleMatCardsComponent,
          ),
      },
    ],
  },
  { path: '', redirectTo: '/examples/mat-buttons', pathMatch: 'full' },
  { path: '**', redirectTo: '/examples/mat-buttons' },
];
