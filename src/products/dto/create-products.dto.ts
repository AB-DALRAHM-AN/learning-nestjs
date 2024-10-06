import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNotEmptyObject, Length, Max, ValidateNested } from 'class-validator';

class CreateProductDetailsDto {
  @IsInt()
  price: number;
  @IsInt()
  quantity: number;
  @IsNotEmpty()
  brand: string;
}

export class CreateProductsDto {
  // * Required
  @Length(3, 20)
  title: string;
  @IsNotEmpty()
  description: string;
  // use class-validator to validate the object
  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateProductDetailsDto)
  details: CreateProductDetailsDto;
}
