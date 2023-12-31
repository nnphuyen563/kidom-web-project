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
    return this.getAll().filter(product => (product.id == +id && !(product.imageUrl.includes('_thumb.'))));
  }

  getProductThumbnail(id: string): Product {
    return this.getAll().filter(product => (product.id == +id && product.imageUrl.includes('_thumb.')))[0];
  }
<<<<<<< HEAD
  getAllProductsBySearchTerm(searchTerm: string){
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getProductsByCategory(category: string): Product[] {
    
    return this.getAll().filter(thumbnail => thumbnail.category ===category);
=======

  getAllProductsBySearchTerm(searchTerm: string){
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getProductsByCategory(category: string): Product[] {
    return this.getAll().filter(product => product.category.toLowerCase() === category.toLowerCase());
  }
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114
}
}