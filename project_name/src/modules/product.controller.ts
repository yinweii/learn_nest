/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/response_data';
import { HttpMessage, HttpStatusCode } from 'src/global/global_enum';
import { Product } from 'src/models/product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getProduct(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.getProduct(),
        HttpStatusCode.SUCCESS,
        true,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product[]>(
        null,
        HttpStatusCode.ERROR,
        false,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  createProduct(): ResponseData<String> {
    try {
      return new ResponseData<String>(
        this.productService.createProduct(),
        HttpStatusCode.SUCCESS,
        true,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<String>(
        this.productService.createProduct(),
        HttpStatusCode.ERROR,
        false,
        HttpMessage.ERROR,
      );
    }
  }
  @Get('/:id')
  detailProduct(@Param('id') id): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.detailProduct(id),
        HttpStatusCode.SUCCESS,
        true,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatusCode.ERROR,
        false,
        HttpMessage.ERROR,
      );
    }
  }
  @Put('/:id')
  updateProduct(): ResponseData<String> {
    try {
      return new ResponseData<String>(
        this.productService.updateProduct(),
        HttpStatusCode.SUCCESS,
        true,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<String>(
        null,
        HttpStatusCode.ERROR,
        false,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete('/:id')
  deleteProduct(): ResponseData<String> {
    try {
      return new ResponseData<String>(
        this.productService.deleteProduct(),
        HttpStatusCode.SUCCESS,
        true,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<String>(
        null,
        HttpStatusCode.ERROR,
        false,
        HttpMessage.ERROR,
      );
    }
  }
}
