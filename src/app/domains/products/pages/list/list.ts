import { Component, signal, inject, input, SimpleChanges } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Product } from '../../components/product/product';

import { ProductService } from '@shared/services/product.service';
import { Cart } from '@shared/services/cart';
import { ProductInterface } from '@shared/models/product.model';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-list',
  imports: [Product, Header, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export default class List {

  aleatorio = Math.floor(Math.random()*200)
  img = `https://picsum.photos/id/${this.aleatorio}/640/640`

  products = signal<ProductInterface[]>([])
  categories = signal<Category[]>([])

  //Input signal  que recibe query parámetro para filtrado de productos por categoría

     categoryId = input<string>('')

  //inyectar servicio de carrito
    public cartService = inject(Cart)
  //inyectar servicio que se conecta a la API de Productos
    private productAPIService = inject(ProductService)
  //inyectar servicio que se conecta a la API de Categorías
    private categoryAPIService = inject(CategoryService)

  ngOnInit(){
    //this.getProducts()

    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges){

    this.getProducts()

  }

  //métodos

    addToCart(product: ProductInterface){
      this.cartService.addToCart(product)

    }


    private getProducts(){
      this.productAPIService.getProducts(this.categoryId())
      .subscribe({
        next: (productsApi)=>{
          this.products.set(productsApi)
        },
        error: (err) => {
        console.error('Error al cargar productos', err)},
      })
    }


    private getCategories(){
      this.categoryAPIService.getCategories()
      .subscribe({
        next: (categoriesApi)=>{

          this.categories.set(categoriesApi)

        }
      })
    }
}
