import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}


  // Get method to get all products
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  // Get method to get a product by id
  @Get(':id') // * /products/1
  getProductById(@Param('id') id: string) {
    if (!id || !this.productsService.getProducts().find((product) => product.id === +id)) {
      return 'No product found';
    }
    return this.productsService.getProducts().find((product) => product.id === +id);
  }

  // Post method to add a product
  @Post('') // * /products
  addProduct(@Req() request: Request) {
    const newProduct = {
      id: this.productsService.getProducts().length + 1,
      title: request.body.title,
    }
    this.productsService.getProducts().push(newProduct);
    return newProduct;
  }

  // Delete method to delete a product
  @Delete(':id') // * /products/1
  deleteProduct(@Param('id') id: string) {
    const productIndex = this.productsService.getProducts().findIndex((product) => product.id === +id);
    if (productIndex === -1) {
      return 'No product found';
    }
    this.productsService.getProducts().splice(productIndex, 1);
    return { message: 'Product deleted', Products: this.productsService.getProducts() };
  } 

  // Put method to update a product
  @Put(':id') // * /products/1
  updateProduct(@Param('id') id: string, @Body() body: { title: string }) {
    const productIndex = this.productsService.getProducts().findIndex((product) => product.id === +id);
    if (productIndex === -1) {
      return 'No product found';
    }
    this.productsService.getProducts()[productIndex].title = body.title;
    return { message: 'Product updated', product: this.productsService.getProducts()[productIndex] };
  }
}
