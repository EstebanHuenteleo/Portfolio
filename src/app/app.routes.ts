import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'cv',
    loadComponent: () =>
      import('./components/cv/cv').then((m) => m.CvComponent),
  },
];
