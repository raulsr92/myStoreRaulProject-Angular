import { Routes } from '@angular/router';
/*Importar páginas*/
import { List } from './domains/products/pages/list/list';

export const routes: Routes = [
  {
    path: '',  //página inicial
    component: List
  }

];
