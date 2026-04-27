import { Component, signal, input, SimpleChanges} from '@angular/core';
import type { ProductInterface } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  //input

  cart = input.required<ProductInterface[]>()

  totalPagar = signal<number>(0)

  hideSideMenu = signal(true)

  toogleSideMenu(){

    console.log("click en carrito")

    this.hideSideMenu.update(prevState => !prevState)

  }

  ngOnChanges(changes:SimpleChanges){

    console.log(changes)

    const longitudCart = this.cart().length
    console.log(longitudCart)

    if (this.cart().length>0) {
      this.totalPagar.update( (valorPrev) => valorPrev + this.cart()[longitudCart-1].price)
    }
  }


}
