import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { User } from '../user/users/models/user.model';
import { MetaData } from '../configurations/metaData/meta.model';
import * as fs from 'fs'
@Injectable()
export class BlogService extends GenericService<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({
  defaultFindOptions:{
      include:[User,MetaData]
  }}){
  constructor(
    @InjectModel(Blog) private blog: typeof Blog,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData) private metaData : typeof MetaData
  ) {
    super(blog, reqParams);
  }

  async updateBlogImage(file: Express.Multer.File, id: string) {
    try {
      const blog = await this.getOne<Blog>(id);
      if (!blog) {
        throw new InternalServerErrorException("Blog not found");
      }
  
      const defaultImagePath = 'backend/src/public/media/default.png'; 
      const filePath = join(__dirname, '../../../../', 'backend/src/public/' + blog.blog_image);
      
      if (file && file.filename) {
        const newImagePath = '/media/blog/' + file.filename;
  
        if (fs.existsSync(filePath)&& filePath!=defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }
  
        await blog.update({
          blog_image: newImagePath,
        });
  
        return 'Blog Image Uploaded Successfully';
      } else {
        return 'No file provided to update';
      }
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
