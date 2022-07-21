import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
   ratingMaximum = 5 as number;
  @Input()
  ratingSelected = 0 as number;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  ratingArrayMaximum = [] as any;
  votedUser = false as boolean;
  ratingPrevious = 0 as number;

  constructor() { }

  ngOnInit(): void {
    this.ratingArrayMaximum = Array(this.ratingMaximum).fill(0);
  }

  manejarMouseEnter(index: number): void{
    this.ratingSelected = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingPrevious !== 0){
      this.ratingSelected = this.ratingPrevious;      
    } else{
      this.ratingSelected = 0;
    }   
  }

  rate(index: number): void{
    this.ratingSelected = index + 1;
    this.votedUser = true;
    this.ratingPrevious = this.ratingSelected;
    this.rated.emit(this.ratingSelected);
  }

}
