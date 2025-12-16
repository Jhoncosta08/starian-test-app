import {FormControl} from '@angular/forms';

export interface ProductsInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: ProductRatingInterface;
}

export interface ProductRatingInterface {
  count: number;
  rate: number;
}

export interface ProductDetailForm {
  id: FormControl<number | null>;
  title: FormControl<string>;
  price: FormControl<number | null>;
  description: FormControl<string>;
  category: FormControl<string>;
  image: FormControl<string>;
}
