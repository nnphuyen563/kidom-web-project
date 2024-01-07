import { Component } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  categories = [
    { label: 'Đồ chơi ngoài trời', value: 'Đồ chơi ngoài trời' },
    { label: 'Búp bê - Gấu bông', value: 'Búp bê - Gấu bông' },
    { label: 'Thủ công - Mỹ thuật', value: 'Thủ công - Mỹ thuật' },
    { label: 'Hoá trang', value: 'Hoá trang' },
    { label: 'Thể thao', value: 'Thể thao' },
    { label: 'Trí tuệ', value: 'Trí tuệ' }
  ];
  selectedCategory: string = ''; // Initial selected category
  filteredProducts: Product[] = [];

  constructor(private productServices: ProductService, private activatedRoute: ActivatedRoute) {
    this.products = productServices.getThumbnail();
    this.filteredProducts = this.products; // Initialize filteredProducts with all products

    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.filteredProducts = this.productServices.getAllProductsBySearchTerm(params.searchTerm);
      } else {
        this.filteredProducts = this.products;
      }
    });
  }

  onCategoryChange(categoryValue: string): void {
    this.selectedCategory = categoryValue;
    if (categoryValue) {
      this.filteredProducts = this.products.filter(product => product.category === categoryValue);
    } else {
      this.filteredProducts = this.products;
    }
  }
}