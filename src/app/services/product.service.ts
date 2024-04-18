import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product, ProductWithQuantity } from '../models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private cart: ProductWithQuantity[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }

  addToCart(product: ProductWithQuantity): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      this.cart.push(product);
    } else {
      existingProduct.quantity = existingProduct.quantity + product.quantity;
    }
  }

  getCart(): ProductWithQuantity[] {
    return this.cart;
  }

  deleteItemInCart(id: number): void {
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotalPriceInCart(): number {
    return this.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
