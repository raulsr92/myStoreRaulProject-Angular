import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductInterface } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  private http = inject(HttpClient)

  // Endpoint para traer todos los productos

    getProducts(categoryId?: string){

      const url = new URL('https://api.escuelajs.co/api/v1/products')

      if (categoryId) {

        url.searchParams.set('categoryId',categoryId)
      }

      return this.http.get<ProductInterface[]>(url.toString())
    }

  // Endpoint para traer un producto por ID

    getOne(id: string){

      return this.http.get<ProductInterface>(`https://api.escuelajs.co/api/v1/products/${id}`)
    }





}
