import { CreateProductsDto } from './create-products.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {}
