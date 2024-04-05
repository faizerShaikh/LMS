import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { PageContent } from './pageContent.model';
import { Module } from '@nestjs/common';
import { PageContentController } from './pageContent.controller';
import { PageContentService } from './pageContent.service';
import { MetaData } from '../MetaData/meta.model';

@Module({
  imports: [SequelizeModule.forFeature([PageContent, MetaData])],
  controllers: [PageContentController],
  providers: [PageContentService],
})
export class PageContentModule {}
