import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

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
  @UsePipes(ValidationPipe)
  addProduct(@Body() CreateProductsDto: CreateProductsDto) {
    return this.productsService.addProduct(CreateProductsDto);
  }

  // Delete method to delete a product
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProducts(id);
  }

  // Put method to update a product
  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateProductsDto: UpdateProductsDto) {
    return this.productsService.updateProduct(updateProductsDto, id);
  }
}