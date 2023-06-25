import { IsNotEmpty, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  pro_name: string;
  @Column()
  pro_slug: string;
  @Column()
  pro_desc: string;
  @Column()
  pro_category_id: number;
  @Column()
  pro_number: number;
  @Column()
  pro_price: number;
  @Column()
  pro_admin_id: number;
  @Column()
  pro_avatar: string;
  @Column()
  pro_sale: number;
  @Column()
  pro_active: number;
  @Column()
  pro_status: number;
  @Column()
  pro_hot: number;
}
