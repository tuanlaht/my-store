import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent, title: 'Product' },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];
