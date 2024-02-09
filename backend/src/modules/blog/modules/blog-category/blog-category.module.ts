import { BlogCategoryService } from './blog-category.service';
import { BlogCategoryController } from './blog-category.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogCategory } from './model';

@Module({
  imports: [SequelizeModule.forFeature([BlogCategory])],
  controllers: [BlogCategoryController],
  providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
