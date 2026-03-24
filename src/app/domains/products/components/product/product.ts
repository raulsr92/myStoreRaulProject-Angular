import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  aleatorio = Math.floor(Math.random() * 200)

  img=`https://picsum.photos/id/${this.aleatorio}/640/640`

}
