import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { ProductInterface } from '@shared/models/product.model';


@Component({
  selector: 'app-product',
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  product = input.required<ProductInterface>()


 // @Output() addToCart = new EventEmitter<string>();  // Forma de declarar un output
  addToCart2 = output<ProductInterface>()

  addToCartHandler(){
    console.log('Click from child')

    //Enviar comunicación al padre

    this.addToCart2.emit(this.product())

  }

}
