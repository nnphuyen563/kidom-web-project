import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {

  @Input()
  stars!: number;

  @Input()
  size: number = 1;
  
  get style () {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight': this.size / 6,

    }
  }

  getStarImage(current: number): string {
    
  }

}
