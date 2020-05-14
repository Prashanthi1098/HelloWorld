import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  title = 'hello-world';
  data = '';
  num = 0;
  displayData(){
      this.data = "Global Computers";
  }

  decreaseNumber(){
    --this.num;
  }
  increaseNumber()
  {
    ++this.num;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
