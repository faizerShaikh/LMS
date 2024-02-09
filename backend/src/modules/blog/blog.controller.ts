import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { BlogService } from './blog.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('blog')
export class BlogController extends GenericController<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({
  createObjDTO: CreateBlogDTO,
  updateObjDTO: UpdateBlogDTO,
}) {
  constructor(private readonly blogService: BlogService) {
    super(blogService);
  }

  @Put('blog-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'blog_image',
      path: '/media/blog',
    }),
  )
  updateBlogImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.blogService.updateBlogImage(file, id);
  }
}
