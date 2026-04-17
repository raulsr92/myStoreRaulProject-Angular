import { Routes } from '@angular/router';
/*Importar páginas*/
import { List } from './domains/products/pages/list/list';
import { About } from './domains/info/pages/about/about';
import { WaveAudio } from './domains/info/components/wave-audio/wave-audio';

export const routes: Routes = [
  {
    path: '',  //página inicial
    component: List
  },
  {
    path: 'about',
    component: About
  },

];
