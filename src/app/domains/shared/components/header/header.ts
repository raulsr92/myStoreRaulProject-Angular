import { Component, signal, input} from '@angular/core';
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

  hideSideMenu = signal(true)

  toogleSideMenu(){

    console.log("click en carrito")

    this.hideSideMenu.update(prevState => !prevState)

  }

}
