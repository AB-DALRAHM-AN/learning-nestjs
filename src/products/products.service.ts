import { Injectable } from '@nestjs/common';
import { Product } from 'interfaces'

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'First Book',
    },
    {
      id: 2,
      title: 'Second Book',
    },
    {
      id: 3,
      title: 'Third Book',
    },
  ];

  getProducts() {
    return this.products;
  }
}
