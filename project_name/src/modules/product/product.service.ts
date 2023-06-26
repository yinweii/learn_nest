import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product = new Product();
    product.pro_name = createProductDto.pro_name;
    product.pro_desc = createProductDto.pro_desc;
    product.pro_slug = createProductDto.pro_slug;
    product.pro_price = createProductDto.pro_price;
    product.pro_category_id = createProductDto.pro_category_id;
    product.pro_number = createProductDto.pro_number;
    product.pro_admin_id = createProductDto.pro_admin_id;
    product.pro_avatar = createProductDto.pro_avatar;
    product.pro_sale = createProductDto.pro_sale;
    product.pro_active = createProductDto.pro_active;
    product.pro_status = createProductDto.pro_status;
    product.pro_hot = createProductDto.pro_hot;
    return this.productRepository.save(product);
  }

  findAll(): Promise<[Product[], number]> {
    return this.productRepository.findAndCount();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
