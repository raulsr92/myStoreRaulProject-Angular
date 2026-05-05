import { Component, signal, inject } from '@angular/core';
import {Product} from './../../components/product/product';
import { Header } from '../../../shared/components/header/header';
import type { ProductInterface } from '../../../shared/models/product.model';
import { Cart } from '../../../shared/services/cart';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  aleatorio = Math.floor(Math.random()*200)
  img = `https://picsum.photos/id/${this.aleatorio}/640/640`

  products = signal<ProductInterface[]>([])

  //inyectar servicio de carrito
    public cartService = inject(Cart)

  //inyectar servicio que se conecta a la API
    private productAPIService = inject(ProductService)


  ngOnInit(){
    this.productAPIService.getProducts()
    .subscribe({
      next: (productsApi)=>{

        this.products.set(productsApi)

      },
      error: (err) => {
      console.error('Error al cargar productos', err)},

    })
  }

  //métodos

    addToCart(product: ProductInterface){

      this.cartService.addToCart(product)

    }

}
