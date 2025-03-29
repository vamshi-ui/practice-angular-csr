import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'lazy',
      loadComponent: () =>
        import('./lazy-load/lazy-load.component').then(
          (m) => m.LazyLoadComponent
        ),
    },
];
