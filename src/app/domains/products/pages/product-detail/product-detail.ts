import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
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


}
