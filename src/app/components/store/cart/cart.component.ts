import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  isMouseOver = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.consolidateCart();
    });
  }

  consolidateCart() {
    const consolidatedCart: Product[] = [];

    this.cartItems.forEach(item => {
      const existingItemIndex = consolidatedCart.findIndex(
        i => i.name === item.name && i.price === item.price
      );

      if (existingItemIndex !== -1) {
        consolidatedCart[existingItemIndex].quantity += item.quantity;
      } else {
        consolidatedCart.push({ ...item });
      }
    });

    this.cartItems = consolidatedCart;
  }

  removeToCart(product: Product) {
    this.cartService.removeToCart(product);
  }
}
