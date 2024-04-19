import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';
import { heroArrowLeftSolid } from '@ng-icons/heroicons/solid';
import { fadeAnimation } from '../../animations';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { InputQuantityComponent } from '../input-quantity/input-quantity.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NgIconComponent,
    RouterLink,
    InputQuantityComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  providers: [provideIcons({ heroArrowLeftSolid, heroShoppingCart })],
  animations: [fadeAnimation],
})
export class ProductDetailComponent {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private title: Title,
    private toast: ToastService
  ) {}

  quantity: number = 1;
  isLoading: boolean = false;

  @Input()
  set id(id: string) {
    this.isLoading = true;
    this.productService.getProductById(Number(id)).subscribe((data) => {
      setTimeout(() => {
        this.product = data;
        this.title.setTitle(this.product!.name);
        this.isLoading = false;
      }, 200);
    });
  }

  product: Product | undefined = undefined;

  addToCart(): void {
    const item = {
      ...(this.product as Product),
      quantity: this.quantity,
    };

    this.cartService.addItem(item);

    this.toast.showToast('success', 'Item has been added to cart! 🎉');
  }
}
