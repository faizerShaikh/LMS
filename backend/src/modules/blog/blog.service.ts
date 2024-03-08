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
import { BlogCategory } from './modules/blog-category/model';
import { BLOB, Sequelize } from 'sequelize';
@Injectable()
export class BlogService extends GenericService<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({
  defaultFindOptions:{
      include:[User,MetaData]
  },
  includes:[User]
}){
  constructor(
    @InjectModel(Blog) private blog: typeof Blog,
    private reqParams: RequestParamsService,
    @InjectModel(BlogCategory) private category:typeof BlogCategory,
  ) {
    super(blog, reqParams);
  }
  
  
  
  async getBlogWithRelated(id: string): Promise<any> {
    try {
      const blog = await this.blog.findOne({where:{slug:id}, include:[BlogCategory,User]})
      // const blog = await this.blog.findByPk(id, { include: [BlogCategory,User] });
      
      if (!blog) {
        throw new Error('Blog not found');
      }
      
      const relatedBlogs = await this.blog.findAll({
        where: { blog_category_id: blog.blog_category_id },
        limit: 3,
        order: Sequelize.literal('RANDOM()'),  
      });
      
      return { blog, relatedBlogs };
    
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async categoryblog(slug:string):Promise<any>{
    try{
      const category = await this.category.findOne({where :{slug:slug}})
      if(!category){
        throw new Error('Category not found')
      }
      const categoryblog= await this.blog.findAll({
        where:{blog_category_id:category.id},
        order : [['createdAt','DESC']]
      })

      return {categoryblog}
    }
    catch(error){
        throw new Error(error.message)
    }
  }

  async slugBlog(slug:string){
    const blog= await this.category.findOne({where :{slug:slug}})
    if (!blog) {
      throw new InternalServerErrorException("Blog not found");
    }
    const categoryblog= await this.blog.findAll({
      where:{blog_category_id:slug},
      order : [['createdAt','DESC']]
    })

    return {categoryblog}
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

  async delete(id?: string): Promise<boolean> {
    
    return true
  }

}
