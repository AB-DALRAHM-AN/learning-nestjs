import { Length, Max } from 'class-validator';

export class CreateProductsDto {
  // * Required
  @Length(3, 20)
  title: string;
  @Max(100)
  description: string;
}
