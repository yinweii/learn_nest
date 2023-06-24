import { ProductService } from './product.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductService],
})
export class ProductModule {}
