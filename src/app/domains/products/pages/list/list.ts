import { Component, signal } from '@angular/core';
import {Product} from './../../components/product/product';
import type { ProductInterface } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  aleatorio = Math.floor(Math.random()*200)
  img = `https://picsum.photos/id/${this.aleatorio}/640/640`

  products = signal<ProductInterface[]>([])

  constructor(){

    const initProducts:ProductInterface[] =[
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 250,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 450,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 550,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 1290,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()

      }
    ]

    //Actualizar signal de productos
      this.products.set(initProducts)
  }

  unpackingMessageFromChild(event: string){

    console.log('Estamos en el padre')
    console.log(event)  //aqui recien escucha el mensaje -> lo desempaca y escucha lo de la linea 24 en product.ts
  }

}
