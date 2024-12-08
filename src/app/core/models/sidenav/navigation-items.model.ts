export interface NavigationItem {
  icon: string;
  label: string;
  route?: string;
  subItems?: NavigationSubItem[];
}

export interface NavigationSubItem {
  label: string;
  route?: string;
  subItems?: NavigationSubSubItem[];
}

export interface NavigationSubSubItem {
  label: string;
  route: string;
}
