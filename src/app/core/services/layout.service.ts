import { MediaMatcher } from '@angular/cdk/layout';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MockNavigationItems } from '@core/layout/navigation-items.data';
import { NavigationItem, NavigationSubItem } from '@core/models/sidenav/navigation-items.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _router = inject(Router);
  private readonly _media = inject(MediaMatcher);

  private readonly _navigationItems = signal<NavigationItem[]>([]);
  private readonly _isMobile = signal<boolean>(false);
  private readonly _selectedItem = signal<NavigationItem | NavigationSubItem | null>(null);

  constructor() {
    // Inicializa la consulta de medios
    const mobileQuery = this._media.matchMedia('(max-width: 600px)');
    const updateIsMobile = () => this._isMobile.set(mobileQuery.matches);

    // Configura el listener de eventos
    mobileQuery.addEventListener('change', updateIsMobile);
    updateIsMobile();

    effect(() => {
      this._navigationItems.set(MockNavigationItems);
    });
  }

  // Getter para consultar el estado del dispositivo móvil
  get isMobile(): boolean {
    return this._isMobile();
  }

  // Getter para obtener los elementos de navegación
  get getNavigationItems(): NavigationItem[] {
    return this._navigationItems();
  }

  // Getter para el índice seleccionado
  get getSelectedItem(): NavigationItem | NavigationSubItem | null {
    return this._selectedItem();
  }

  // Getter para verificar si el índice seleccionado tiene subítems
  get hasSelectedItemSubItems(): boolean {
    const item = this.getSelectedItem;
    if (item === null) return false;
    return !!item?.subItems?.length;
  }

  // Método para seleccionar un índice
  selectNavigationItem(item: NavigationItem | NavigationSubItem): void {
    this._selectedItem.set(item);
    debugger;
    if (!item?.subItems?.length) this._router.navigate([item.route]);
  }
}
