import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogCategoryDTO } from './create-blog-category.dto';

export class UpdateBlogCategoryDTO extends PartialType(CreateBlogCategoryDTO) {}
