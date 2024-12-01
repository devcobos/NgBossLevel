import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Provider } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Proveedor para configurar `MatIconRegistry` con soporte para Material Symbols
 * o cualquier otra librería de iconos.
 *
 * Deberemos importar este provider en el `app.config.ts` de nuestra aplicación.
 *
 * **Ejemplo de uso:**
 * ```typescript
 * import { provideMatIconCustomConfig } from './mat-icon.providers';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     ...provideMatIconCustomConfig(),
 *   ],
 * };
 * ```
 *
 * **Resultado:**
 * Una vez configurado, podrás usar `<mat-icon>` con los iconos de Material Symbols directamente:
 * ```html
 * <mat-icon>home</mat-icon>
 * <mat-icon>menu</mat-icon>
 * ```
 */
export function provideMatIconCustomConfig(): Provider {
  return {
    provide: MatIconRegistry,
    useFactory: (httpClient: HttpClient, sanitizer: DomSanitizer, errorHandler: ErrorHandler) => {
      const registry = new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
      registry.registerFontClassAlias('material-symbols-outlined', 'material-symbols-outlined');
      registry.setDefaultFontSetClass('material-symbols-outlined');
      return registry;
    },
    deps: [HttpClient, DomSanitizer, ErrorHandler],
  };
}
