import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: "button" | "reset" | "submit" = "button";
  @Input() color: string = "";
  miclass = {'btn': true};

  constructor() {} 

  ngOnInit() {
     
  }

  get colors(): any {
    return {
      'bg-success-700 hover:bg-success-800 focus:ring-success-300': this.color === 'success',
      'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300': this.color === 'primary',
      'bg-red-700 hover:bg-red-800 focus:ring-red-300': this.color === 'red',
    }
  }

}
