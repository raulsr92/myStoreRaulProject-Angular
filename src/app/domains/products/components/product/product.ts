import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  @Input({required:true}) img: string = ' '; // propiedad que recibirá la imagen desde el padre

  @Input({required:true}) price: number = 0;

  @Input({required:true}) title: string = ' ';

  @Output() addToCart = new EventEmitter<string>();  // Forma de declarar un output

  addToCartHandler(){
    console.log('Click from child')

    //Enviar comunicación al padre

    this.addToCart.emit(`Hola, este es un mesaje desde el hijo, soy el ${this.title}`) //Aqui se emite pero no se escucha auns
  }

}
