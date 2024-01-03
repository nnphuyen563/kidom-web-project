import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { PRODUCTS } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll(): Product[] {
    return PRODUCTS;
  }

  getThumbnail(): Product[] {
    return this.getAll().filter(product => product.imageUrl.includes('_thumb.'));
  }

  getDetail(id: string): Product[] {
    console.log(id);
    return this.getAll().filter(product => (product.id.toString() === id));
  }

  getProductThumbnail(id: string): Product {
    return this.getAll().filter(product => (product.id == +id && product.imageUrl.includes('_thumb.')))[0];
  }
  getAllProductsBySearchTerm(searchTerm: string){
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getProductsByCategory(category: string): Product[] {
    return this.getAll().filter(product => product.category ===category);
}
}