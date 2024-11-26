import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
}
