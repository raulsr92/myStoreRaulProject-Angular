import { Category } from "./category.model";

export interface ProductInterface{
  id: number,
  title: string,
  price: number,
  category:Category
  images: string[],
  description: string,
  creationAt: string,
}

