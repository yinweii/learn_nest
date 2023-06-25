import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    let category: Category = new Category();

    category.name = createCategoryDto.name;
    category.slug = createCategoryDto.slug;
    category.description = createCategoryDto.description;
    category.hot = createCategoryDto.hot;
    category.status = createCategoryDto.status;
    return this.categoryRepository.save(category);
  }

  async findAll(paging: any, filter: any) {
    let condition: any = {};
    if (filter.hot) condition.hot = filter.hot;
    if (filter.status) condition.status = filter.status;
    const take = paging.page_size || 10;

    return await this.categoryRepository.findAndCount({
      where: condition,
      take: take,
      skip: paging.page - 1,
    });
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    let category: Category = new Category();

    category.name = updateCategoryDto.name;
    category.slug = updateCategoryDto.slug;
    category.description = updateCategoryDto.description;
    category.hot = updateCategoryDto.hot;
    category.status = updateCategoryDto.status;
    category.id = id;

    return this.categoryRepository.save(category);
  }

  remove(id: number) {
    return this.categoryRepository.delete(+id);
  }
}
