import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  id: number;
  category_id: number;

  @MinLength(5, { message: 'Product name must be 5 characters long' })
  product_name: string;

  @IsNumber()
  price: number;
}
