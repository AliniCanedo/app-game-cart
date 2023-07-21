import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from './products.service';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: Product) {
    const currentCartItems = this.cartItemsSubject.getValue();
    this.cartItemsSubject.next([...currentCartItems, product]);
  }

  getCartItems(): Product[] {
    return this.cartItemsSubject.getValue();
  }
}
