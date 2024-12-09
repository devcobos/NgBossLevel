export interface NavigationItem {
  icon: string;
  label: string;
  route?: string;
  subItems?: SecondaryNavigationItem[];
}

export interface SecondaryNavigationItem {
  label: string;
  route?: string;
  subItems?: TertiaryNavigationItem[];
}

export interface TertiaryNavigationItem {
  label: string;
  route: string;
}
