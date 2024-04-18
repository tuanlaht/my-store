import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/Product';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, LoadingSpinnerComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  animations: [fadeAnimation],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;

    this.productService.getProducts().subscribe((data) => {
      setTimeout(() => {
        this.products = data;
        this.isLoading = false;
      }, 500);
    });
  }
}
