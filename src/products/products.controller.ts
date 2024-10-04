import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  private products: { id: string; title: string }[] = [
    {
      id: '1',
      title: 'First Book',
    },
    {
      id: '2',
      title: 'Second Book',
    },
    {
      id: '3',
      title: 'Third Book',
    },
  ];
  // Controller logic
  @Get()
  getProducts() {
    return this.products;
  }

  @Get(':id') // * /products/1
  getProductById(@Req() request: Request) {
    if (
      !request.params.id ||
      !this.products.find((product) => product.id === request.params.id)
    ) {
      return 'No product found';
    }
    return this.products.find((product) => product.id === request.params.id);
  }
}
