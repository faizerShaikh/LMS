import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { User } from '../user/users/models/user.model';

@Injectable()
export class BlogService extends GenericService<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({includes:User}) {
  constructor(
    @InjectModel(Blog) private blog: typeof Blog,
    private reqParams: RequestParamsService,
  ) {
    super(blog, reqParams);
  }

  async updateBlogImage(file: Express.Multer.File, id: string) {
    const blog = await this.getOne<Blog>(id);
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
      blog_image: '/media/blog/'+file.filename,
    });
    return 'Blog Image Uploaded Successfully';
  }
  async findFeaturedBlogs(): Promise<Blog[]> {
    return this.blog.findAll({include:[User],
      where: { is_featured: true },
    });
  }

  async notFeaturedBLogs(): Promise<Blog[]> {
    return this.blog.findAll({include:[User],
      where: { is_featured: false },
    });
  }
}
