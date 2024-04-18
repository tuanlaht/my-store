import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeftSolid } from '@ng-icons/heroicons/solid';
import { fadeAnimation } from '../../animations';
import { ProductWithQuantity } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartPaymentComponent } from '../cart-payment/cart-payment.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    NgIconComponent,
    CartItemComponent,
    CartPaymentComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [provideIcons({ heroArrowLeftSolid })],
  animations: [fadeAnimation],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private location: Location) {}
  cart: ProductWithQuantity[] = [];

  ngOnInit(): void {
    this.cartService.itemsInCart$.subscribe((items) => {
      this.cart = items;
    });
  }

  goBack() {
    this.location.back();
  }
}
