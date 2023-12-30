import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { PRODUCTS } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items: any[] =[];
    totalPrice=0;
    total=0;
  constructor() { }

//   saveCart():void(){
//     localStorage.setItem('cart_items',json.stringify(this.items));
//   }
//   addcart(item: any, quantity: number){
//     this.loadCart();
//     if(!this.productInCart(item)){
//         item.quantity = quantity;
//         item=subTotal = item.quantity * item.price;
//         this.items.push(item)
//     } else{
//         this.items.forEach(res => {
//             if(res.id == item.id){
//                 res.quantity += quantity;
//                 res.subTotal = res.quantity*res.price;
//             }
//         });
//     }
//     item.quantity = quantity;
//     this.saveCart();
//     this.getTotalPrice();
  }