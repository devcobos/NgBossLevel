export type NavigationItem = {
  icon: string;
  label: string;
  route?: string;
  subItems: NavigationItem[];
};
