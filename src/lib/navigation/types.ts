export interface NavigationItem {
  key: string;
  href?: string;
  children?: NavigationItem[];
  data?: any; // Puedes reemplazar 'any' con un tipo más específico si lo deseas
}
