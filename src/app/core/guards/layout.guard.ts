import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NAVIGATION_ITEM } from '@core/layout/navigation-items.data';
import {
  NavigationItem,
  SecondaryNavigationItem,
  TertiaryNavigationItem,
} from '@core/models/sidenav/navigation-items.model';
import { LayoutService } from '@core/services/layout.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutGuard implements CanActivate {
  private readonly _layoutService = inject(LayoutService);
  private readonly _router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Solo ejecuta la lógica si es la primera navegación
    if (!this._layoutService.isFirstNavigation) {
      return true; // Permite la activación sin verificar
    }

    const currentRoute = state.url; // Ruta actual
    const hierarchy = this.getNavigationHierarchy(currentRoute);

    if (hierarchy) {
      console.log('Navigation Hierarchy:', hierarchy);

      // Posición 0: Primary Navigation Item
      const primaryItem = hierarchy[0] as NavigationItem;
      if (primaryItem) {
        this._layoutService.updateParentNavigationItem(primaryItem);
      }

      // Posición 1: Secondary Navigation Item
      const secondaryItem = hierarchy[1] as SecondaryNavigationItem;
      if (secondaryItem) {
        this._layoutService.updateSecondaryNavigationItem(secondaryItem);
      }

      // Posición 2: Tertiary Navigation Item
      const tertiaryItem = hierarchy[2] as TertiaryNavigationItem;
      if (tertiaryItem) {
        this._layoutService.updateTertiaryItemNavigationItem(tertiaryItem);
      }

      // Marca que ya no es la primera navegación
      this._layoutService.markFirstNavigationComplete();

      return true; // Permite la activación
    } else {
      console.warn('Route not found. Redirecting...');
      this._router.navigate(['/home']);

      // Marca que ya no es la primera navegación
      this._layoutService.markFirstNavigationComplete();

      return false;
    }
  }

  /**
   * Construye un array con la jerarquía de navegación para una ruta específica.
   */
  private getNavigationHierarchy(
    route: string
  ): (NavigationItem | SecondaryNavigationItem | TertiaryNavigationItem)[] | null {
    const hierarchy: (NavigationItem | SecondaryNavigationItem | TertiaryNavigationItem)[] = [];

    for (const item of NAVIGATION_ITEM) {
      if (this.isRouteMatch(item, route)) {
        hierarchy.push(item);
        return hierarchy;
      }

      if (item.subItems) {
        const secondaryHierarchy = this.findInSubItems(item.subItems, route, [item]);
        if (secondaryHierarchy) {
          return secondaryHierarchy;
        }
      }
    }

    return null;
  }

  /**
   * Busca recursivamente en subItems para construir la jerarquía de navegación.
   */
  private findInSubItems(
    subItems: SecondaryNavigationItem[] | TertiaryNavigationItem[],
    route: string,
    currentHierarchy: (NavigationItem | SecondaryNavigationItem | TertiaryNavigationItem)[]
  ): (NavigationItem | SecondaryNavigationItem | TertiaryNavigationItem)[] | null {
    for (const subItem of subItems) {
      if (this.isRouteMatch(subItem, route)) {
        return [...currentHierarchy, subItem];
      }

      if (this.hasSubItems(subItem) && subItem.subItems) {
        const deeperHierarchy = this.findInSubItems(subItem.subItems, route, [...currentHierarchy, subItem]);
        if (deeperHierarchy) {
          return deeperHierarchy;
        }
      }
    }
    return null;
  }

  /**
   * Comprueba si un elemento tiene la ruta buscada.
   */
  private isRouteMatch(
    item: NavigationItem | SecondaryNavigationItem | TertiaryNavigationItem,
    route: string
  ): boolean {
    return item.route === route;
  }

  /**
   * Type guard para verificar si un elemento tiene subItems.
   */
  private hasSubItems(item: SecondaryNavigationItem | TertiaryNavigationItem): item is SecondaryNavigationItem {
    return !!(item as SecondaryNavigationItem).subItems;
  }
}
