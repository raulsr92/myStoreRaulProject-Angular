import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import type { ProductInterface } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  products = input.required<ProductInterface>()


  @Output() addToCart = new EventEmitter<string>();  // Forma de declarar un output


  addToCartHandler(){
    console.log('Click from child')

    //Enviar comunicación al padre

    this.addToCart.emit(`Hola, este es un mesaje desde el hijo, soy el ${this.products().title}`) //Aqui se emite pero no se escucha auns
  }

}
