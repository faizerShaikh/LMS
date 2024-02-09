import { Controller } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { CreateBlogCategoryDTO, UpdateBlogCategoryDTO } from './dtos';
import { BlogCategoryService } from './blog-category.service';
import { BlogCategory } from './model';

@Controller('blog/blog-category')
export class BlogCategoryController extends GenericController<
  BlogCategory,
  CreateBlogCategoryDTO,
  UpdateBlogCategoryDTO
>({
  createObjDTO: CreateBlogCategoryDTO,
  updateObjDTO: UpdateBlogCategoryDTO,
}) {
  constructor(private readonly blogCategoryService: BlogCategoryService) {
    super(blogCategoryService);
  }
}
