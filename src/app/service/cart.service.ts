import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    const existingItemIndex = currentCartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      currentCartItems[existingItemIndex].quantity += 1;
    } else {
      currentCartItems.push({ ...product, quantity: 1 });
    }

    this.cartItemsSubject.next(currentCartItems);
  }

  removeToCart(product: Product) {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = currentCartItems.filter(item => item.id !== product.id);
    this.cartItemsSubject.next(updatedCartItems);
  }

  getCartItems(): Product[] {
    return this.cartItemsSubject.getValue();
  }
}
