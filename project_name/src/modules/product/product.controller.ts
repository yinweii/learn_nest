import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request } from 'express';
import { Paging } from 'src/global/paging';
import { ResponseData } from 'src/global/response_data';
import { HttpMessage } from 'src/global/global_enum';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(@Req() request: Request) {
    const paging = {
      page: request.query.page || 1,
      page_size: request.query.page_size || 10,
    };
    const filter = {
      hot: request.query.hot || '',
      status: request.query.status || '',
    };
    const result = await this.productService.findAll();

    const [data, total] = result;

    const pagingData = new Paging(
      Number(paging.page),
      Number(paging.page_size),
      total,
    );
    return new ResponseData(
      200,
      true,
      HttpMessage.SUCCESS,
      { category: data },
      pagingData,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
