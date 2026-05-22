import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe , UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  //Inyección a servicio API
    private productAPIService = inject(ProductService)

  //Input signal  que recibe parámetro de la ruta
     id = input<string>('')

  //Signal que almacena el producto traído de la API en base al ID pasado por ruta
    productDetail = signal<ProductInterface | null>(null)

  //Signal con indice de img a mostrar en galería

    imgToShow = signal<number>(0)

  ngOnInit(){
    if(this.id()){
      this.productAPIService.getOne(this.id())
      .subscribe({
        next: (productWithId)=>{
          console.log(productWithId)

          this.productDetail.set(productWithId)
        }
      })
    }}

  //Método para controlar la imagen a mostrar

  imageHandler(index:number){

    console.log( `Ha hecho click en la imagen:  ${index} `)

    this.imgToShow.set(index)

  }

}
