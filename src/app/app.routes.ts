import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () =>
      import('./lazy-load/lazy-load.component').then(
        (m) => m.LazyLoadComponent
      ),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then((m) => m.routes),
  },
];
