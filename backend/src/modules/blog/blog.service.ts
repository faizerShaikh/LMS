import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class BlogService extends GenericService<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({}) {
  constructor(
    @InjectModel(Blog) private blog: typeof Blog,
    private reqParams: RequestParamsService,
  ) {
    super(blog, reqParams);
  }

  async updateBlogImage(file: Express.Multer.File, id: string) {
    const blog = await this.getOne<Blog>(id);
console.log(blog,file);

    if (blog.blog_image) {
      unlink(
        join(__dirname, '../../../../', 'src/public/media' + blog.blog_image),
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await blog.update({
      blog_image: '/media/blog/About-Us-page-1707399391277-505639148.jpg',
    });
    return 'Blog Image Uploaded Successfully';
  }
}
