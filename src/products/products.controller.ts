import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Get method to get all products
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  // Get method to get a product by id
  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductById(id);
  }

  // Post method to add a product
  @Post('')
  addProduct(@Body() body: { title: string }) {
    return this.productsService.addProduct(body);
  }

  // Delete method to delete a product
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProducts(id);
  }

  // Put method to update a product
  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body: { title: string }) {
    return this.productsService.updateProduct(body, id);
  }
}
