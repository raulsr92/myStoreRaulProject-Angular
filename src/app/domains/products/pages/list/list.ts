import { Component, signal } from '@angular/core';
import {Product} from './../../components/product/product';
import { Header } from '../../../shared/components/header/header';
import type { ProductInterface } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  aleatorio = Math.floor(Math.random()*200)
  img = `https://picsum.photos/id/${this.aleatorio}/640/640`

  products = signal<ProductInterface[]>([])

  cart = signal<ProductInterface[]>([])


  constructor(){

    const initProducts:ProductInterface[] =[
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100.00,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 250.60,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 450.90,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 550.00,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 1290.99,
        image: `https://picsum.photos/id/${this.aleatorio}/640/640`,
        creationAt: new Date().toLocaleString()

      }
    ]

    //Actualizar signal de productos
      this.products.set(initProducts)
  }

  addToCart(event: ProductInterface){

    console.log('Vamos a agregar al carrito el siguiente producto:')
    console.log(event)

    this.cart.update((carrito)=> [...carrito,event])

    console.log(this.cart())
  }

}
