import { Injectable, signal,computed } from '@angular/core';
import { ProductInterface } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  //signal
    cart = signal<ProductInterface[]>([])

  //computed signal

    calcTotal = computed(()=>{

      const cart = this.cart()

      return cart.reduce((acumulador, {price})=> acumulador+price, 0)

    })

  //método

    addToCart(product: ProductInterface){

      this.cart.update((carrito)=> [...carrito,product])

      console.log(this.cart())
    }


}
