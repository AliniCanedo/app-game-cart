import { Component } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  products: Product[] = [];

  isMouseOver = false;
  
  constructor(private productsService: ProductsService) {  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = response
      },

      (error) => {

      }
    )
  }  
}
