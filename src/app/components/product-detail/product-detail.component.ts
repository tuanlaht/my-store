import { heroShoppingCart } from '@ng-icons/heroicons/outline';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeftSolid } from '@ng-icons/heroicons/solid';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { InputQuantityComponent } from '../input-quantity/input-quantity.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIconComponent, RouterLink, InputQuantityComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  providers: [provideIcons({ heroArrowLeftSolid, heroShoppingCart })],
})
export class ProductDetailComponent {
  constructor(private productService: ProductService) {}

  quantity: number = 1;

  @Input()
  set id(id: string) {
    this.productService.getProductById(Number(id)).subscribe((data) => {
      this.product = data;
    });
  }

  product: Product | undefined = undefined;

  addToCart(): void {
    const item = {
      ...(this.product as Product),
      quantity: this.quantity,
    };

    this.productService.addToCart(item);
  }
}
