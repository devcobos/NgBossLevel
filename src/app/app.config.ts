import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryCache } from '@apollo/client/core';
import { provideMatIconCustomConfig } from '@config/icon-registry.config';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
    provideRouter(ROUTES, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMatIconCustomConfig(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({
          uri: 'https://rickandmortyapi.com/graphql',
        }),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
