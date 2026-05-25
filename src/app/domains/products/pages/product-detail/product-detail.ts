import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe , UpperCasePipe} from '@angular/common';
import { Cart } from '@shared/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  //Inyección a servicio API
    private productAPIService = inject(ProductService)
    private cartService = inject(Cart)

  //Input signal  que recibe parámetro de la ruta
     id = input<string>('')

  //Signal que almacena el producto traído de la API en base al ID pasado por ruta
    productDetail = signal<ProductInterface | null>(null)

  //Signal con indice de img a mostrar en galería

    imgToShow = signal<number>(-1)


  ngOnInit(){
    if(this.id()){
      this.productAPIService.getOne(this.id())
      .subscribe({
        next: (productWithId)=>{
          console.log(productWithId)

          this.productDetail.set(productWithId)


          if(this.productDetail()!.images?.length > 0){

            this.imgToShow.set(0)

          }
        }
      })
    }}

  //Método para controlar la imagen a mostrar

  imageHandler(index:number){

    console.log( `Ha hecho click en la imagen:  ${index} `)

    this.imgToShow.set(index)

  }

  // Método para agregar al carrito (ubicado en servicio) producto recibido por OUTPUT

    addToCart(){

      const producto = this.productDetail()

      if (producto){
        this.cartService.addToCart(producto)
      }

    }

}
