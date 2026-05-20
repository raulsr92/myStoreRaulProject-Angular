import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { ProductInterface } from '@shared/models/product.model';
import { TimeAgoPipe } from '@shared/pipes/time-ago-pipe';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, DatePipe, TimeAgoPipe, RouterLink],
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
