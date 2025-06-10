import { Component } from '@angular/core';
import { Product } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productos : Product[] = [];

  constructor(private productService: Productos) {
    this.productos = this.productService.getProducts();
  }

}
