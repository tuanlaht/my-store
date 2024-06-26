export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.url = '';
    this.description = '';
  }
}

export class ProductWithQuantity extends Product {
  quantity: number;

  constructor() {
    super();
    this.quantity = 0;
  }
}
