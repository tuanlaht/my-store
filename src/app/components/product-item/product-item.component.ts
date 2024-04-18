import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) id: number;
  @Input({ required: true }) name: string;
  @Input({ required: true }) price: number;
  @Input({ required: true }) url: string;
  @Input() description: string;

  constructor() {
    (this.id = 0),
      (this.name = ''),
      (this.price = 0),
      (this.url = ''),
      (this.description = '');
  }
}
