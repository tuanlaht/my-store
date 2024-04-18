import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent, title: 'Product' },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];
