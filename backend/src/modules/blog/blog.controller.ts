import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { BlogService } from './blog.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('configurations/blog')
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

  @Get('featured')
  async findFeaturedBlogs(): Promise<Blog[]> {
    return this.blogService.findFeaturedBlogs();
  }
  @Get('/not-featured')
  async getNotFeaturedBlogs(
    @Query('slug') slug: string,
    @Query('limit') limit: string,
    @Query('page') page: string,
  ) {
    const { blogs, hasMore } = await this.blogService.notFeaturedBlogs(
      slug,
      limit,
      page,
    );
    return { blogs, hasMore };
  }
  @Get('blog-detail/:id')
  async singleBlogs(@Param('id') id: string): Promise<Blog> {
    return this.blogService.getBlogWithRelated(id);
  }
}
