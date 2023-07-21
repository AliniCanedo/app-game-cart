import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: Product[] = [];

  isMouseOver = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeToCart(product: Product) {
    this.cartService.removeToCart(product);
  }
}
