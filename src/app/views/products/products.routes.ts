import {Routes} from '@angular/router';

export const productsRoutes: Routes = [
  {
    path: '',
    title: 'Produtos',
    loadComponent: () => import('./products.page').then(c => c.ProductsPage),
  },

  {
    path: ':id',
    title: 'Produtos - Detalhes',
    loadComponent: () => import('./product-detail/product-detail.page').then(c => c.ProductDetailPage),
  },
];
