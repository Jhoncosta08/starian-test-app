import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  // --------------

  {
    path: 'dashboard',
    title: 'início',
    loadComponent: () => import('./views/dashboard/dashboard').then(c => c.Dashboard),
  },

  // --------------
];
