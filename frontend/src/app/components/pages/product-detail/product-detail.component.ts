import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Catagory } from '../../../shared/models/Catagory';
import { CatagoryService } from '../../../services/catagory.service';
import { CartService} from '../../../services/cart.service';
// import { faStar} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../../../item';


@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
  
  })
export class ProductDetailComponent implements OnInit {
    products: Product[] = [];
    catagorys: Catagory[] =[];
    thumbnail: Product = new Product();
    quantity: number=1;
    relatedProducts: Product[] = [];
  constructor(
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute,
    private catagoryServices: CatagoryService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    
    route.queryParams.subscribe(params => {
      this.products = productServices.getDetail(params['id']);
      this.thumbnail = productServices.getProductThumbnail(params['id']);

      console.log(this.products);
    });

    // this.products = productServices.getThumbnail();
    this.catagorys= catagoryServices.getAll();
    
  }
//chọn số lượng
  increase(){
    this.quantity +=1;
  }
  decrease(){
    if (this.quantity > 1){
        this.quantity -=1;
    }
  }
  handleChange(event: any) {
    // Xử lý sự kiện khi giá trị thay đổi
    console.log('Quantity changed:', this.quantity);
  }
//   addCart(item:any){
//     this.cartService.getItems();
//     this.cartService.addToCart(item,this.quantity);
//     this.showSuccess("Add To Cart Successfully!");
//   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      // Gọi phương thức hoặc service để lấy sản phẩm chi tiết (this.productServices.getDetail(productId))
      // Sau đó, gọi phương thức hoặc service để lấy các sản phẩm cùng danh mục
      this.relatedProducts = this.productServices.getProductsByCategory(this.thumbnail.category);
  });
  }

  changeThumbnail(index: number): void {
    let temp = this.thumbnail;

    this.thumbnail = this.products[index];
    this.products = this.products.slice(0, index).concat(this.products.slice(index + 1));
    this.products.push(temp);
  }

  addToCart(product: Item) {
    // Gọi hàm addToCart từ CartService để thêm sản phẩm vào giỏ hàng
    this.cartService.addToCart(product);
  }
}
