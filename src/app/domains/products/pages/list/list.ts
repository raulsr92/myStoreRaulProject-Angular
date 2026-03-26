import { Component } from '@angular/core';
import {Product} from './../../components/product/product';

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  aleatorio = Math.floor(Math.random()*200)

  img = `https://picsum.photos/id/${this.aleatorio}/640/640`

  unpackingMessageFromChild(event: string){

    console.log('Estamos en el padre')
    console.log(event)  //aqui recien escucha el mensaje -> lo desempaca y escucha lo de la linea 24 en product.ts
  }

}
