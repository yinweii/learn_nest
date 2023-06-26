import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ResponseData } from 'src/global/response_data';
import { HttpMessage } from 'src/global/global_enum';
import { Request } from 'express';
import { Paging } from 'src/global/paging';
import { AuthGuard } from '../auth/auth.guard';
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const result = await this.categoryService.create(createCategoryDto);

    return new ResponseData(200, true, HttpMessage.SUCCESS, result);
  }
  @UseGuards(AuthGuard)
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

    const result = await this.categoryService.findAll(paging, filter);
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
  async findOne(@Param('id') id: string) {
    const data = await this.categoryService.findOne(+id);
    return new ResponseData(200, true, HttpMessage.SUCCESS, data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const result = this.categoryService.update(+id, updateCategoryDto);
    return new ResponseData(200, true, HttpMessage.SUCCESS, result);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.categoryService.remove(+id);
    return new ResponseData(200, true, HttpMessage.SUCCESS, result);
  }
}
