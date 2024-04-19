import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

interface Form {
  fullName: string;
  address: string;
  creditCardNumber: string;
}

@Component({
  selector: 'app-cart-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-payment.component.html',
  styleUrl: './cart-payment.component.css',
})
export class CartPaymentComponent implements OnInit {
  form: Form = {
    fullName: '',
    address: '',
    creditCardNumber: '',
  };
  totalPrice = this.cartService.totalPrice$;

  constructor(private cartService: CartService, private route: Router) {}
  // Validators.pattern(/^\d+$/),

  ngOnInit(): void {}

  onCheckout(userForm: NgForm): void {
    this.markFormGroupTouched(userForm);

    if (userForm.invalid) {
      userForm.controls;
      return;
    }

    let totalPrice;

    this.cartService.totalPrice$.subscribe((data) => (totalPrice = data));

    this.route.navigate([
      '/checkout',
      {
        name: this.form.fullName,
        price: totalPrice,
      },
    ]);
  }

  private markFormGroupTouched(formGroup: NgForm): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof NgForm) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
