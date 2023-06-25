import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  slug: string;
  description: string;
  hot: number | 0;
  status: number;
}
