import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { BlogCategory } from './model';
import { CreateBlogCategoryDTO, UpdateBlogCategoryDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BlogCategoryService extends GenericService<
  BlogCategory,
  CreateBlogCategoryDTO,
  UpdateBlogCategoryDTO
>({}) {
  constructor(
    @InjectModel(BlogCategory) private blogCategory: typeof BlogCategory,
    private reqParams: RequestParamsService,
  ) {
    super(blogCategory, reqParams);
  }
}
