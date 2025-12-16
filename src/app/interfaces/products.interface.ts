
export interface ProductsInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRatingInterface;
}

export interface ProductRatingInterface {
  count: number;
  rate: number;
}
