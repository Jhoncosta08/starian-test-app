import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },

  // --------------

  {
    path: 'produtos',
    title: 'Produtos',
    loadComponent: () => import('./views/products/products.page').then(c => c.ProductsPage),
  },

  // --------------
];
