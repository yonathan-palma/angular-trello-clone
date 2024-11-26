import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';

import { NavbarComponent } from '../../components/navbar/navbar.component';

import { dataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent,
    CdkTableModule,
    CommonModule,
    BtnComponent,
    ReactiveFormsModule
  ],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  constructor(private http: HttpClient) { }

  dataSource = new dataSourceProduct();
  total = 0;
  columns:string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  input = new FormControl('', {nonNullable: true});

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data) => {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataSource.find(value);
    })
  }

  update(product: Product) {
    this.dataSource.update(product.id, {price: 20});
  }

}
