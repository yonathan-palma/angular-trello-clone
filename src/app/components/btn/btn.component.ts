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
  @Input() color: 'success' | 'primary' | 'red' | 'gray-light' = 'gray-light';
  miclass = {'btn': true};

  mapColors = {
    'success': 'bg-success-700 hover:bg-success-800 focus:ring-success-300',
    'primary': 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300',
    'red': 'bg-red-700 hover:bg-red-800 focus:ring-red-300',
    'gray-light': 'bg-gray-200 hover:bg-gray-500 focus:ring-gray-50'
  }

  constructor() {} 

  ngOnInit() {
     
  }

  get colors(): any {
    const colors = this.mapColors[this.color];
    if(colors) {
      return colors;
    }

    return {}
  }

}
