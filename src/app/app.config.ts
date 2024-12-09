import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideMatIconCustomConfig } from '@config/icon-registry.config';
import { ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
    provideRouter(ROUTES, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMatIconCustomConfig(),
  ],
};
