import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
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
  

  // Get method to get all products
  @Get()
  getProducts() {
    return this.products;
  }

  // Get method to get a product by id
  @Get(':id') // * /products/1
  getProductById(@Param('id') id: string) {
    if (!id || !this.products.find((product) => product.id === +id)) {
      return 'No product found';
    }
    return this.products.find((product) => product.id === +id);
  }

  // Post method to add a product
  @Post('') // * /products
  addProduct(@Req() request: Request) {
    const newProduct = {
      id: this.products.length + 1,
      title: request.body.title,
    }
    this.products.push(newProduct);
    return newProduct;
  }

  // Delete method to delete a product
  @Delete(':id') // * /products/1
  deleteProduct(@Param('id') id: string) {
    const productIndex = this.products.findIndex((product) => product.id === +id);
    if (productIndex === -1) {
      return 'No product found';
    }
    this.products.splice(productIndex, 1);
    return { message: 'Product deleted', Products: this.products };
  } 

  // Put method to update a product
  @Put(':id') // * /products/1
  updateProduct(@Param('id') id: string, @Body() body: Product) {
    const productIndex = this.products.findIndex((product) => product.id === +id);
    if (productIndex === -1) {
      return 'No product found';
    }
    this.products[productIndex].title = body.title;
    return { message: 'Product updated', product: this.products[productIndex] };
  }
}
