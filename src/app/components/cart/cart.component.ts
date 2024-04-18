import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeftSolid } from '@ng-icons/heroicons/solid';
import { ProductWithQuantity } from '../../models/Product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [provideIcons({ heroArrowLeftSolid })],
})
export class CartComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private location: Location
  ) {}
  cart: ProductWithQuantity[] = [];

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }

  goBack() {
    this.location.back();
  }
}
