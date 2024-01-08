import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CatagoryService } from '../../../services/catagory.service';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { Item } from '../../../shared/models/Item';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryId: number = 0;
  categoryName: string = '';
  catagorys: Catagory[] = [];

  products: any[] = [];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private catagoryServices: CatagoryService // Sửa tên thành activatedRoute
  ) {
    this.catagorys = catagoryServices.getAll();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('catagoryName') ?? '';
      this.categoryId = this.catagorys.filter(
        (x) => x.name == this.categoryName
      )[0].id;
      this.getListByCategory(this.categoryId);
      console.log(this.products);
    });
  }

  getListByCategory(id: number) {
    this.productService.getListByCategory(id).subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
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
