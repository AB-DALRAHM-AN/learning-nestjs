import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

interface Product {
  id: number;
  title: string;
}

@Controller('products')
export class ProductsController {
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
  
  // Controller logic
  @Get()
  getProducts() {
    return this.products;
  }

  @Get(':id') // * /products/1
  getProductById(@Param('id') id: string) {
    if (!id || !this.products.find((product) => product.id === +id)) {
      return 'No product found';
    }
    return this.products.find((product) => product.id === +id);
  }

  @Post('') // * /products
  addProduct(@Req() request: Request) {
    const newProduct = {
      id: this.products.length + 1,
      title: request.body.title,
    }
    this.products.push(newProduct);
    return newProduct;
  }
}
