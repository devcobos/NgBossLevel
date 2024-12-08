import { MediaMatcher } from '@angular/cdk/layout';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION_ITEM } from '@core/layout/navigation-items.data';
import { NavigationItem, NavigationSubItem, NavigationSubSubItem } from '@core/models/sidenav/navigation-items.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _router = inject(Router);
  private readonly _media = inject(MediaMatcher);

  private readonly _navigationItems = signal<NavigationItem[]>([]);
  private readonly _selectedParentNavigation = signal<NavigationItem>(NAVIGATION_ITEM[0]);
  private readonly _selectedSubItemNavigation = signal<NavigationSubItem | null>(null);
  private readonly _selectedSubSubItemNavigation = signal<NavigationSubSubItem | null>(null);

  private readonly _isOpenSidenav = signal<boolean>(false);
  private readonly _isMobile = signal<boolean>(false);

  constructor() {
    const mobileQuery = this._media.matchMedia('(max-width: 600px)');
    const updateIsMobile = () => this._isMobile.set(mobileQuery.matches);

    mobileQuery.addEventListener('change', updateIsMobile);
    updateIsMobile();

    effect(() => {
      const items = NAVIGATION_ITEM;
      this._navigationItems.set(items);
    });
  }

  get getNavigationItems(): NavigationItem[] {
    return this._navigationItems();
  }

  get selectedParent(): NavigationItem {
    return this._selectedParentNavigation();
  }

  get selectedSubItem(): NavigationSubItem | null {
    return this._selectedSubItemNavigation();
  }

  get selectedSubSubItem(): NavigationSubSubItem | null {
    return this._selectedSubSubItemNavigation();
  }

  get isMobile(): boolean {
    return false;
  }

  get isOpenSidenav(): boolean {
    return this._isOpenSidenav();
  }

  // Método para seleccionar un ítem
  updateParentNavigation(item: NavigationItem): void {
    this._selectedParentNavigation.set(item);

    if (!item.subItems?.length) {
      this._selectedSubItemNavigation.set(null);
      this._selectedSubSubItemNavigation.set(null);
      this._isOpenSidenav.set(false);
      this._router.navigate([item.route]);
    } else {
      this._isOpenSidenav.set(true);
    }
  }

  updateSubItemNavigation(item: NavigationSubItem): void {
    if (!item.subItems?.length) {
      this._selectedSubItemNavigation.set(item);
      this._selectedSubSubItemNavigation.set(null);
      this._router.navigate([item.route]);
    } else if (this.selectedSubItem === item) {
      this._selectedSubItemNavigation.set(null);
    } else {
      this._selectedSubItemNavigation.set(item);
    }
  }

  updateSubSubItemNavigation(item: NavigationSubSubItem): void {
    this._selectedSubSubItemNavigation.set(item);
    this._router.navigate([item.route]);
  }
}
