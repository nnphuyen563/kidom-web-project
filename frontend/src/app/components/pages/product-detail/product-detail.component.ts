import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CatagoryService } from '../../../services/catagory.service';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
// import { faStar} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../../shared/models/Item';
import { ProductAdmin } from '../../../shared/models/ProductAdmin';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: ProductAdmin[] = [];
  catagorys: Catagory[] = [];
  categoryName: string = '';
  product: any;
  quantity: number = 1;
  relatedProducts: ProductAdmin[] = [];
  listRelatedProduct: any[] = [];
  id: number = 0;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryService: CatagoryService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {
    route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.getProduct();
    });
    this.catagorys = catagoryService.getAll();
  }

  //chọn số lượng
  increase() {
    this.quantity += 1;
  }
  decrease() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
  handleChange(event: any) {
    // Xử lý sự kiện khi giá trị thay đổi
    console.log('Quantity changed:', this.quantity);
  }
  //------------------------------------------------
  ngOnInit(): void {}
  getProduct() {
    this.productService.getProdct(this.id).subscribe({
      next: (res) => {
        this.product = res;
        this.getListRelatedProduct();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getListRelatedProduct() {
    this.productService
      .getListRelatedProduct(this.product.category.id)
      .subscribe({
        next: (res) => {
          this.listRelatedProduct = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  //Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
  addToCart(product: Item) {
    this.cartService.addToCart(product);
  }
  buyNow(product: Item) {
    this.cartService.addToCart(product);
    //Chuyển qua cart
    this.router.navigate(['/cart']);
  }
}
