import { Component } from '@angular/core';
import { Banner } from '../../../shared/models/Banner';
import { BannerService } from '../../../services/banner.service';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { CatagoryService } from '../../../services/catagory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  banners: Banner[] = [];
  products: Product[] = [];
<<<<<<< HEAD
  catagorys: Catagory[] =[];

  // constructor(private bannerServices: BannerService, private productServices: ProductService, private catagoryServices: CatagoryService) { 
  //   this.banners = bannerServices.getAll();
  //   this.products = productServices.getThumbnail();
  //   this.catagorys= catagoryServices.getAll()

  constructor(
    private bannerServices: BannerService,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryServices: CatagoryService
      // Sửa tên thành activatedRoute
  ) {
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();
    this.catagorys= catagoryServices.getAll();
=======
  catagorys: Catagory[] =[]

  constructor(private bannerServices: BannerService, private productServices: ProductService, private catagoryServices: CatagoryService) { 
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();
    this.catagorys= catagoryServices.getAll()

  constructor(
    private bannerServices: BannerService,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute  // Sửa tên thành activatedRoute
  ) {
    this.banners = bannerServices.getAll();
    this.products = productServices.getThumbnail();
>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114

    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.products = this.productServices.getAllProductsBySearchTerm(params.searchTerm);
      } else {
        this.products = productServices.getThumbnail();
      }
    });
  }
<<<<<<< HEAD
}
=======
}

>>>>>>> 0db53822d9b72b2f594ce3986e6127398b27f114
