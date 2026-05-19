import { Routes } from '@angular/router';
/*Importar páginas*/
import { List } from './domains/products/pages/list/list';
import { About } from './domains/info/pages/about/about';
import { WaveAudio } from './domains/info/components/wave-audio/wave-audio';
import { NotFound } from './domains/info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',  //página inicial
    component: Layout,
    children:[
      {
        path: '',  //página inicial
        component: List
      },
      {
        path: 'about',
        component: About
      },
    ]
  },
  {
    path: '**',
    component: NotFound
  },
];
