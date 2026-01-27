import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Arbeitsschutz } from './arbeitsschutz/arbeitsschutz';
import { Brandschutz } from './brandschutz/brandschutz';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      { path: 'arbeitsschutz', component: Arbeitsschutz },
      { path: 'brandschutz', component: Brandschutz },
    ],
  },
];
