import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMinus, heroPlus } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-input-quantity',
  standalone: true,
  imports: [NgIconComponent, FormsModule],
  templateUrl: './input-quantity.component.html',
  styleUrl: './input-quantity.component.css',
  providers: [provideIcons({ heroMinus, heroPlus })],
})
export class InputQuantityComponent {
  @Input({ required: true }) quantity: number;
  @Output() quantityChange = new EventEmitter();

  constructor() {
    this.quantity = 1;
  }

  onChangeQuantity(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    const parseValue = parseInt(value);

    if (parseValue <= 1 || isNaN(parseValue)) {
      this.quantity = 1;
      this.quantityChange.emit(this.quantity);

      (event.target as HTMLInputElement).value = '0';
    } else {
      this.quantity = parseValue;
      this.quantityChange.emit(this.quantity);
    }
  }

  onIncrease(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  onDecrease(): void {
    if (this.quantity <= 1) {
      this.quantity = 1;
      return;
    }

    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
}
