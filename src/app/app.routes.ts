import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Senior Angular Developer',
  },
  {
    path: 'colophon',
    loadComponent: () =>
      import('./features/colophon/colophon.component').then((m) => m.ColophonComponent),
    title: 'Colophon',
  },
  { path: '**', redirectTo: '' },
];
