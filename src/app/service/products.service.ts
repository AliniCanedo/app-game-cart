import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private selectedProductSubject = new BehaviorSubject<Product | null>(null);
  public selectedProduct$ = this.selectedProductSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products")
  }

  setSelectedProduct(product: Product) {
    this.selectedProductSubject.next(product);
  }
}
