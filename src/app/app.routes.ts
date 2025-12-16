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
    loadChildren: () => import('./views/products/products.routes').then(r => r.productsRoutes),
  },

  // --------------
];
