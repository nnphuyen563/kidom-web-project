import { Component } from '@angular/core';
import { Banner } from '../../../shared/models/Banner';
import { BannerService } from '../../../services/banner.service';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  banners: Banner[] = [];
  products: Product[] = [];

  constructor(private bannerServices: BannerService, private productServices: ProductService) { 
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();
  }
}
