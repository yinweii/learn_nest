import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  id: number;
  pro_name: string;

  @IsNotEmpty()
  pro_desc: string;

  @IsNotEmpty()
  @IsNumber()
  pro_category_id: number;
  pro_number: number;
  pro_price: number | 0;
  pro_admin_id: number;
  pro_avatar: string;
  pro_sale: number | 0;
  pro_active: number | 0;
  pro_status: number | 0;
  pro_hot: number | 0;
}
