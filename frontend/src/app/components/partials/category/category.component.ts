import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service'; 
import { Product } from '../../../shared/models/Product';
import { CartService } from '../../../services/cart.service';
import { Item } from '../../../../item';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string = '';
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('catagoryName') ?? '';
      this.products = this.productService.getProductsByCategory(this.categoryName);
      console.log(this.products);

    });
  }

  sortByPrice(order: 'lowToHigh' | 'highToLow'): void {
    if (order === 'lowToHigh') {
      this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  addToCart(product: Item) {
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }
}
