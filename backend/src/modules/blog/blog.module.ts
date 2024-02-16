import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './model';
import { BlogCategoryModule } from './modules/blog-category/blog-category.module';
import { BlogCategoryController } from './modules/blog-category/blog-category.controller';
import { BlogCategoryService } from './modules/blog-category/blog-category.service';
import { BlogCategory } from './modules/blog-category/model';
import { User } from '../user/users/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Blog,BlogCategory,User]),],
  controllers: [BlogCategoryController, BlogController, ],
  providers: [BlogService,BlogCategoryService],
})
export class BlogModule {}
