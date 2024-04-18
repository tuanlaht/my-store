import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';
import { CartService } from './../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({ heroShoppingCart })],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}
  totalQuantityInCart = this.cartService.totalQuantity$;

  ngOnInit(): void {}
}
