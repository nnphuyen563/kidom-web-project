import { Component } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Item } from '../../../../item';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent {
  products: Product[] = [];
  thumbnail: Product = new Product;

  constructor(
    private cartService: CartService,
    private productService:ProductService , 
    private route:ActivatedRoute,
    activatedRoute: ActivatedRoute) {
      // activatedRoute.params.subscribe((params) =>{
      //   if(params.id)
      //   // this.products = productService.getProductById(params.id);
      // })
    route.queryParams.subscribe(params => {
      this.products = productService.getDetail(params['id']);
      this.thumbnail = productService.getProductThumbnail(params['id']);
    });
  }

  changeThumbnail(index: number): void {
    let temp = this.thumbnail;

    this.thumbnail = this.products[index];
    this.products = this.products.slice(0, index).concat(this.products.slice(index + 1))
    this.products.push(temp);
  }

  addToCart(product: Item) {
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }
}
