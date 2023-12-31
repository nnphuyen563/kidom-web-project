import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
declare var addAcc: any;
declare var removeAcc: any;
declare var addName: any;
declare var $: any;
//import 'assets/js/design-by-you.js';

@Component({
  selector: 'app-design-by-you',
  templateUrl: './design-by-you.component.html',
  styleUrl: './design-by-you.component.css'
})
export class DesignByYouComponent implements OnInit{
  ngOnInit() {
    $(() => {
      console.log('hello there!');
    });
  }
  //increase/decrease quantitys
  quantity: number = 1; // Initial quantity value

  decrease(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  increase(): void {
    this.quantity += 1;
  }

  handleChange(event: any): void {
    // Handle manual input change if necessary
    const inputVal = event.target.value;
    if (!isNaN(inputVal)) {
      this.quantity = parseInt(inputVal, 10);
    }
  }
  //change bear
  nameBear: string = "Teddy Bear"
  image: any =
    "assets/img/animals/teddy-bear.png";
  teddy() {
      this.nameBear = "Teddy Bear";
      this.image =
        "assets/img/animals/teddy-bear.png";
    }
  rabbit() {
    this.nameBear = "Pink Rabbit";
    this.image =
      "assets/img/animals/rabbit.png";
  }
  monkey() {
    this.nameBear = "Brown Monkey";
    this.image =
      "assets/img/animals/monkey.png";
  }
  onLoadfunc() {
    new addAcc();
  }
  onBtnClick(){
    // Call the sayHello() function from hello.js file
    new removeAcc();
  }
  changeName() {
    new addName();
  }
  constructor(private el: ElementRef, private renderer:Renderer2){}

  ngAfterViewInit(){
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#FDF0F0');
  }
}
