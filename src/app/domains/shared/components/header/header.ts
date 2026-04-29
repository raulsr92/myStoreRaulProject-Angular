import { Component, signal, input, SimpleChanges, inject} from '@angular/core';
import type { ProductInterface } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  //input signal

  //cart = input.required<ProductInterface[]>()

  //inyeccion de servicios

    private cartService = inject(Cart)

  //del servicio

    cart = this.cartService.cart;
    total = this.cartService.calcTotal

  //signals

    //totalPagar = signal<number>(0)

    hideSideMenu = signal(true)

    toogleSideMenu(){

      console.log("click en carrito")

      this.hideSideMenu.update(prevState => !prevState)

    }


 /*
  calcTotal(){
    return this.cart().reduce((acumulador, {price})=> acumulador+price, 0)
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)

    //Preguntamos si algo en el carrito cambió, porque puede haber más signals

    if(changes['cart']){
      this.totalPagar.set(this.calcTotal())
  }

*/

  /*
  ngOnChanges(changes:SimpleChanges){

    console.log(changes)

    const longitudCart = this.cart().length
    console.log(longitudCart)

    if (this.cart().length>0) {
      this.totalPagar.update( (valorPrev) => valorPrev + this.cart()[longitudCart-1].price)
    }
  }
    */


}
