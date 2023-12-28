import { Component } from '@angular/core';
import { Banner } from '../../../shared/models/Banner';
import { BannerService } from '../../../services/banner.service';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  banners: Banner[] = [];
  products: Product[] = [];

  constructor(
    private bannerServices: BannerService,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute  // Sửa tên thành activatedRoute
  ) {
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();

    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.products = this.productServices.getAllProductsBySearchTerm(params.searchTerm);
      } else {
        this.products = productServices.getAll();
      }
    });
  }
}

