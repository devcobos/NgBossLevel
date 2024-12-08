export type NavigationItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: NavigationSubItems[];
};

type NavigationSubItems = {
  label: string;
  route?: string;
  subItems?: NavigationSubItems[];
};
