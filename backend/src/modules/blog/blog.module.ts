import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './model';
import { BlogCategoryModule } from './modules/blog-category/blog-category.module';

@Module({
  imports: [SequelizeModule.forFeature([Blog]), BlogCategoryModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
