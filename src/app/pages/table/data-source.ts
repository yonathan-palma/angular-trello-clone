import { DataSource } from "@angular/cdk/collections";
import { Product } from "../../models/product.model";
import { BehaviorSubject, Observable } from "rxjs";

export class dataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(data: Product[]) {
    this.originalData = data;
    this.data.next(data);
  }

  getTotal() {
    const products = this.data.getValue();
    return products.map((product) => product.price).reduce((a, b) => a + b, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const product = products.findIndex((p) => p.id === id);
    if(product !== -1) {
      products[product] = {
        ...products[product],
        ...changes
      }
      console.log(products[product]);
      this.data.next(products);
    }
  }

  find(query: string) {
    const filterProducts = this.originalData.filter((product) => {
      //const word = `${product.title} ${product.id} ${product.price}`;
      return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        product.id.toString().includes(query) ||
        product.price.toString().includes(query);
    });
    
    this.data.next(filterProducts);
  }

  disconnect() {
    // No-op
  }

}