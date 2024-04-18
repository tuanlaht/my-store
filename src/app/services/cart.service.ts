import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductWithQuantity } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsInCartSubject = new BehaviorSubject<ProductWithQuantity[]>([]);
  private totalPrice = new BehaviorSubject<number>(0);
  private totalQuantity = new BehaviorSubject<number>(0);

  totalPrice$ = this.totalPrice.asObservable();
  totalQuantity$ = this.totalQuantity.asObservable();
  itemsInCart$ = this.itemsInCartSubject.asObservable();

  constructor() {}

  getCart(): ProductWithQuantity[] {
    return this.itemsInCartSubject.value;
  }

  addItem(product: ProductWithQuantity): void {
    const items = this.getCart();
    const foundIndex = items.findIndex((item) => item.id === product.id);
    if (foundIndex > -1) {
      items[foundIndex].quantity += product.quantity;
    } else {
      items.push(product);
    }
    this.itemsInCartSubject.next(items);
    this.updateCartMetrics();
  }

  updateItemQuantity(productId: number, quantity: number): void {
    const items = this.getCart();
    const index = items.findIndex((item) => item.id === productId);
    if (index !== -1) {
      items[index].quantity = quantity;
      this.itemsInCartSubject.next(items);
    }
    this.updateCartMetrics();
  }

  deleteItemInCart(productId: number): void {
    const items = this.getCart().filter((item) => item.id !== productId);
    this.itemsInCartSubject.next(items);
    this.updateCartMetrics();
  }

  onChangeCart(): void {
    this.updateCartMetrics();
  }

  private updateCartMetrics(): void {
    let total = 0;
    let totalQty = 0;

    const items = this.getCart();

    items.forEach((item) => {
      total += item.price * item.quantity;
      totalQty += item.quantity;
    });

    this.totalPrice.next(total);
    this.totalQuantity.next(totalQty);
  }
}
