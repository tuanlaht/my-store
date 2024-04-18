import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-payment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cart-payment.component.html',
  styleUrl: './cart-payment.component.css',
})
export class CartPaymentComponent implements OnInit {
  form!: FormGroup;
  totalPrice = this.cartService.totalPrice$;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      address: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^\d+$/),
        ]),
      ],
      creditCardNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ]),
      ],
    });
  }

  onCheckout(): void {
    this.markFormGroupTouched(this.form);
    if (!this.form.valid) {
      return;
    }
    // Handle invalid form
    console.log('Form submitted successfully:', this.form.value);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
