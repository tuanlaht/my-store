import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMarkSolid } from '@ng-icons/heroicons/solid';
import { ProductWithQuantity } from '../../models/Product';
import { InputQuantityComponent } from '../input-quantity/input-quantity.component';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [InputQuantityComponent, NgIconComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
  providers: [provideIcons({ heroXMarkSolid })],
})
export class CartItemComponent {
  constructor(private cartService: CartService) {}

  @Input({ required: true }) product!: ProductWithQuantity;

  onRemoveProduct(id: number): void {
    this.cartService.deleteItemInCart(id);
  }

  onChangeQuantity() {
    this.cartService.onChangeCart();
  }
}
