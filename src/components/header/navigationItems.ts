export interface NavigationItem {
  title: string;
  href: string;
  isExternal?: boolean;
  rel?: string;
}

export const navigationItems: NavigationItem[] = [];