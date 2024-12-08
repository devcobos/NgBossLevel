import { MediaMatcher } from '@angular/cdk/layout';
import { effect, inject, Injectable, signal } from '@angular/core';
import { MockNavigationItems } from '@core/layout/navigation-items.data';
import { NavigationItem } from '@core/models/sidenav/navigation-items.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly _menuItems = signal<NavigationItem[]>([]);
  private readonly _isMobile = signal<boolean>(false);
  private readonly _selectedMenuIndex = signal<number | null>(null);

  private readonly _media = inject(MediaMatcher);

  constructor() {
    // Inicializa la consulta de medios
    const mobileQuery = this._media.matchMedia('(max-width: 600px)');
    const updateIsMobile = () => this._isMobile.set(mobileQuery.matches);

    // Configura el listener de eventos
    mobileQuery.addEventListener('change', updateIsMobile);
    updateIsMobile();

    effect(() => {
      this._menuItems.set(MockNavigationItems);
    });
  }

  // Getter para consultar el estado del dispositivo móvil
  get isMobile(): boolean {
    return this._isMobile();
  }

  // Getter para obtener los elementos de navegación
  get getNavigationItems() {
    return this._menuItems;
  }

  // Getter para el índice seleccionado
  get selectedMenuIndex() {
    return this._selectedMenuIndex;
  }

  // Getter para verificar si el índice seleccionado tiene subítems
  get hasSelectedMenuSubItems(): boolean {
    const selectedIndex = this._selectedMenuIndex();
    if (selectedIndex === null) return false;
    const selectedItem = this._menuItems()[selectedIndex];
    return !!selectedItem?.subItems?.length;
  }
  // Método para seleccionar un índice
  selectMenuIndex(index: number): void {
    this._selectedMenuIndex.set(index);
  }
}
