import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Blog } from './model';
import { CreateBlogDTO, UpdateBlogDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { User } from '../user/users/models/user.model';
import { MetaData } from '../configurations/MetaData/meta.model';
import * as fs from 'fs';
import { BlogCategory } from './modules/blog-category/model';
import { Op, Sequelize } from 'sequelize';
@Injectable()
export class BlogService extends GenericService<
  Blog,
  CreateBlogDTO,
  UpdateBlogDTO
>({
  defaultFindOptions: {
    include: [User, MetaData],
  },
  includes: [User,MetaData],
}) {
  constructor(
    @InjectModel(Blog) private blog: typeof Blog,
    private reqParams: RequestParamsService,
    @InjectModel(BlogCategory) private category: typeof BlogCategory,
  ) {
    super(blog, reqParams);
  }

  async getBlogWithRelated(slug: string): Promise<any> {
    try {
      const blog = await this.blog.findOne({
        where: { slug: slug },
        include: [BlogCategory, User],
      });

      if (!blog) {
        throw new Error('Blog not found');
      }
      let previous = await this.blog.findOne({
        where: { createdAt: { [Op.lt]: blog.createdAt } },
        order: [['createdAt', 'DESC']],
      });
      let next = await this.blog.findOne({
        where: { createdAt: { [Op.gt]: blog.createdAt } },
        order: [['createdAt', 'ASC']],
      });
      if (!previous) {
        previous = await this.blog.findOne({
          order: [['createdAt', 'DESC']],
        });
      }
      if (!next) {
        next = await this.blog.findOne({
          order: [['createdAt', 'ASC']],
        });
      }

      const relatedBlogs = await this.blog.findAll({
        where: { blog_category_id: blog.blog_category_id },
        limit: 3,
        order: Sequelize.literal('RANDOM()'),
      });

      return { blog, relatedBlogs, next, previous };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async slugBlog(slug: string) {
    const blog = await this.category.findOne({ where: { slug: slug } });
    if (!blog) {
      throw new InternalServerErrorException('Blog not found');
    }
    const categoryblog = await this.blog.findAll({
      where: { blog_category_id: slug },
      order: [['createdAt', 'DESC']],
    });

    return { categoryblog };
  }

  async updateBlogImage(file: Express.Multer.File, id: string) {
    try {
      const blog = await this.getOne<Blog>(id);
      if (!blog) {
        throw new InternalServerErrorException('Blog not found');
      }

      const defaultImagePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/media/default.png',
      );
      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + blog.blog_image,
      );

      if (file && file.filename) {
        console.log(
          '=================================================>filepath',
          filePath,
        );
        console.log(
          '=================================================>filepath',
          defaultImagePath,
        );
        if (fs.existsSync(filePath) && filePath != defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        } else {
          console.log('not deleted');
        }
        const newImagePath = '/media/blog/' + file.filename;
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
    return this.blog.findAll({ include: [User], where: { is_featured: true } });
  }

  async notFeaturedBlogs(slug: string, limit: string, page: string) {
    const pageNumber = parseInt(page) || 1;
    const limits = parseInt(limit) || 6;
    const offset = (pageNumber - 1) * limits;
    let hasMore = false;
    let category;

    if (slug) {
      category = await this.category.findOne({ where: { slug: slug } });
      if (!category) {
        throw new Error('Category not found');
      }
    }
    console.log(category, slug);

    let totalBlogs: number;
    if (!slug) {
      totalBlogs = await this.blog.count({ where: { is_featured: false } });
    } else {
      totalBlogs = await this.blog.count({
        where: { blog_category_id: category.id },
      });
    }

    if (totalBlogs > offset + limits) {
      hasMore = true;
    }

    const blogs = await this.blog.findAll({
      include: [User],
      where: !slug ? { is_featured: false } : { blog_category_id: category.id },
      order: [['createdAt', 'DESC']],
      limit: limits,
      offset: offset,
    });

    return { blogs, hasMore };
  }
}
