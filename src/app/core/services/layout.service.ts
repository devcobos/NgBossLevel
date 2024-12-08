import { MediaMatcher } from '@angular/cdk/layout';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION_ITEM } from '@core/layout/navigation-items.data';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _router = inject(Router);
  private readonly _media = inject(MediaMatcher);

  private readonly _navigationItems = signal<NavigationItem[]>([]);
  private readonly _isMobile = signal<boolean>(false);
  private readonly _selectedState = signal<{
    item: NavigationItem | null;
    path: NavigationItem[];
    level: number | null;
  }>({ item: null, path: [], level: null });

  private readonly _isOpenSidenav = signal<boolean>(false);

  constructor() {
    const mobileQuery = this._media.matchMedia('(max-width: 600px)');
    const updateIsMobile = () => this._isMobile.set(mobileQuery.matches);

    mobileQuery.addEventListener('change', updateIsMobile);
    updateIsMobile();

    effect(() => {
      const items = NAVIGATION_ITEM;
      this.initializeNavigationHierarchy(items);
      this._navigationItems.set(items);
    });
  }

  get getNavigationItems(): NavigationItem[] {
    return this._navigationItems();
  }

  get selectedItem(): NavigationItem | null {
    return this._selectedState().item;
  }

  get selectedPath(): NavigationItem[] {
    return this._selectedState().path;
  }

  get selectedLevel(): number | null {
    return this._selectedState().level;
  }

  get isMobile(): boolean {
    return false;
  }

  get isOpenSidenav(): boolean {
    return this._isOpenSidenav();
  }

  get getTopLevelItem(): NavigationItem | null {
    let currentItem = this._selectedState().item;

    if (!currentItem) {
      return null; // Si no hay elemento seleccionado, retorna null.
    }

    // Recorre hacia arriba hasta encontrar un elemento sin padre
    while (currentItem.parent) {
      currentItem = currentItem.parent;
    }

    return currentItem;
  }

  // Método para seleccionar un ítem
  selectNavigationItem(item: NavigationItem): void {
    const path: NavigationItem[] = [];
    let currentItem: NavigationItem | null = item;

    while (currentItem) {
      path.unshift(currentItem);
      currentItem = currentItem.parent || null;
    }

    this._selectedState.set({
      item,
      path,
      level: item.level || null,
    });

    if (!item.subItems?.length) {
      // Si toplevel no tiene subitems cerramos sidenav
      if (!this.getTopLevelItem?.subItems?.length) {
        this._isOpenSidenav.set(false);
      }
      this._router.navigate([item.route]);
    } else {
      this._isOpenSidenav.set(true);
    }
  }

  private initializeNavigationHierarchy(
    items: NavigationItem[],
    level: number = 0,
    parent: NavigationItem | null = null,
  ): void {
    items.forEach((item) => {
      item.level = level; // Asigna el nivel actual.
      item.parent = parent || undefined; // Asigna el padre actual, si existe.
      if (item.subItems) {
        this.initializeNavigationHierarchy(item.subItems, level + 1, item); // Recurre para subitems.
      }
    });
  }
}
