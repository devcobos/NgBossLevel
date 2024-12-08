export type NavigationItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: NavigationSubItem[];
};

export type NavigationSubItem = {
  label: string;
  route?: string;
  subItems?: NavigationSubItem[];
};
