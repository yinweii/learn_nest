import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  id: number;
  pro_name: string;
  pro_desc: string;
  pro_category_id: number;
  pro_number: number;
  pro_price: number | 0;
  pro_admin_id: number;
  pro_avatar: string;
  pro_sale: number | 0;
  pro_active: number | 0;
  pro_status: number | 0;
  pro_hot: number | 0;
  pro_slug: string;
}
