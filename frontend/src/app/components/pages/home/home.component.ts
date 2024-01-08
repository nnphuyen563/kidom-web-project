import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerService } from '../../../services/banner.service';
import { CartService } from '../../../services/cart.service';
import { CatagoryService } from '../../../services/catagory.service';
import { ProductService } from '../../../services/product.service';
import { Banner } from '../../../shared/models/Banner';
import { Catagory } from '../../../shared/models/Catagory';
import { Item } from '../../../shared/models/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  banners: Banner[] = [];
  products: any;
  catagorys: Catagory[] = [];

  constructor(
    private cartService: CartService,
    private bannerServices: BannerService,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryServices: CatagoryService // Sửa tên thành activatedRoute
  ) {
    this.banners = bannerServices.getAll();
    this.catagorys = catagoryServices.getAll();
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        // this.products = this.productServices.getAllProductsBySearchTerm(
        //   params.searchTerm
        // );

        this.products = this.productServices.searchProduct(params.searchTerm);
      }
    });
  }
  ngOnInit(): void {
    this.getListProduct();
  }

  addToCart(product: Item) {
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }

  getListProduct() {
    this.productServices.getListProductHomePage().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
