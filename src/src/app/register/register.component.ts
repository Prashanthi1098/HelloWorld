import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show=false;
  constructor() { }

  ngOnInit(): void {
  }
  
register()
{
  this.show=!this.show;
}
clear()
{
  this.show=!this.show;
}
}
