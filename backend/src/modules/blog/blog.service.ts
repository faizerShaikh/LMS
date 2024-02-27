import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { User } from '../user/users/models/user.model';
import { MetaData } from '../configurations/metaData/meta.model';
import { type } from '../configurations/metaData/dto/type.enum';

@Injectable()
export class BlogService extends GenericService<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({includes:[User,MetaData]}) {
  constructor(
    @InjectModel(Blog) private blog: typeof Blog,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData) private metaData : typeof MetaData
  ) {
    super(blog, reqParams);
  }

  async updateBlogImage(file: Express.Multer.File, id: string) {
    const blog = await this.getOne<Blog>(id);
    try {
      if (blog.blog_image) {
        unlink(
          join(__dirname, '../../../../', 'backend/src/public/' + blog.blog_image),
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
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
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
