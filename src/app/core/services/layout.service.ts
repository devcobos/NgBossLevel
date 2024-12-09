import { MediaMatcher } from '@angular/cdk/layout';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NAVIGATION_ITEM } from '@core/layout/navigation-items.data';
import {
  NavigationItem,
  SecondaryNavigationItem,
  TertiaryNavigationItem,
} from '@core/models/sidenav/navigation-items.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _router = inject(Router);
  private readonly _media = inject(MediaMatcher);

  private readonly _navigationItems = signal<NavigationItem[]>([]);
  private readonly _selectedParentNavigationItem = signal<NavigationItem>(NAVIGATION_ITEM[0]);
  private readonly _selectedSecondaryNavigationItem = signal<SecondaryNavigationItem | null>(null);
  private readonly _selectedTertiaryNavigationItem = signal<TertiaryNavigationItem | null>(null);
  private readonly _isFirstNavigation = signal<boolean>(true);

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
    return this._selectedParentNavigationItem();
  }

  get selectedSecondaryItem(): SecondaryNavigationItem | null {
    return this._selectedSecondaryNavigationItem();
  }

  get selectedSubSubItem(): TertiaryNavigationItem | null {
    return this._selectedTertiaryNavigationItem();
  }

  get isMobile(): boolean {
    return false;
  }

  get isOpenSidenav(): boolean {
    return this._isOpenSidenav();
  }

  get isFirstNavigation(): boolean {
    return this._isFirstNavigation();
  }

  markFirstNavigationComplete(): void {
    this._isFirstNavigation.set(false);
  }

  // Método para seleccionar un ítem
  updateParentNavigationItem(item: NavigationItem): void {
    this._selectedParentNavigationItem.set(item);

    if (!item.subItems?.length) {
      this._selectedSecondaryNavigationItem.set(null);
      this._selectedTertiaryNavigationItem.set(null);
      this._isOpenSidenav.set(false);
      this.navigateToRoute(item.route);
    } else {
      this._isOpenSidenav.set(true);
    }
  }

  updateSecondaryNavigationItem(item: SecondaryNavigationItem): void {
    if (!item.subItems?.length) {
      this._selectedSecondaryNavigationItem.set(item);
      this._selectedTertiaryNavigationItem.set(null);
      this.navigateToRoute(item.route);
    } else if (this.selectedSecondaryItem === item) {
      this._selectedSecondaryNavigationItem.set(null);
    } else {
      this._selectedSecondaryNavigationItem.set(item);
    }
  }

  updateTertiaryItemNavigationItem(item: TertiaryNavigationItem): void {
    this._selectedTertiaryNavigationItem.set(item);
    this.navigateToRoute(item.route);
  }

  private navigateToRoute(route: string | undefined): void {
    if (!this.isFirstNavigation && route) this._router.navigate([route]);
  }
}
