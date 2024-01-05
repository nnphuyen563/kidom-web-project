import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor() { }
   
  menuVariable:boolean = false;
  menu_icon_variable: boolean = false;
  menuActive: boolean = false;
  openMenu(){
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
    this.menuActive = !this.menuActive;
  }
  
}
