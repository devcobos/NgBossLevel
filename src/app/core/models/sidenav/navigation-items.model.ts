export interface NavigationItem {
  icon?: string; // Opcional, solo aplicable a elementos de nivel superior.
  label: string;
  route?: string;
  subItems?: NavigationItem[]; // Los subitems usan el mismo modelo.
  parent?: NavigationItem; // Referencia opcional al elemento padre.
  level?: number; // Nivel jerárquico en la navegación.
}
