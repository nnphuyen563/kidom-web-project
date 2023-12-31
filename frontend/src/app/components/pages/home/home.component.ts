import { Component } from '@angular/core';
import { Banner } from '../../../shared/models/Banner';
import { BannerService } from '../../../services/banner.service';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { CatagoryService } from '../../../services/catagory.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../../item';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  banners: Banner[] = [];
  products: Product[] = [];
  catagorys: Catagory[] =[];

  // constructor(private bannerServices: BannerService, private productServices: ProductService, private catagoryServices: CatagoryService) { 
  //   this.banners = bannerServices.getAll();
  //   this.products = productServices.getThumbnail();
  //   this.catagorys= catagoryServices.getAll()

  constructor(
    private cartService: CartService,
    private bannerServices: BannerService,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryServices: CatagoryService
      // Sửa tên thành activatedRoute
  ) {
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();
    this.catagorys= catagoryServices.getAll();

    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.products = this.productServices.getAllProductsBySearchTerm(params.searchTerm);
      } else {
        this.products = productServices.getThumbnail();
      }
    });
  }

  addToCart(product: Item) {
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }
}
