
export type Page = 'home' | 'products' | 'contact';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
