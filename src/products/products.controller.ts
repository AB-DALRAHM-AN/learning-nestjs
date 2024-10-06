import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
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
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  // Post method to add a product
  @Post('')
  addProduct(@Req() request: Request) {
    return this.productsService.addProduct(request);
  }

  // Delete method to delete a product
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProducts(id);
  }

  // Put method to update a product
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() body: { title: string }) {
    return this.productsService.updateProduct(body, id);
  }
}
