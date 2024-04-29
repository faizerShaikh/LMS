import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PageContent } from './pageContent.model';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CreatePageDto, UpdatePageContent } from './dtos';
import { unlink } from 'fs';
import * as fs from 'fs';
import { join } from 'path';
import { gallery } from '../Gallery/gallery.model';
import { MetaData } from '../MetaData/meta.model';
import { Op } from 'sequelize';
import { PageContentSeedData } from './data';

@Injectable()
export class PageContentService extends GenericService<
  PageContent,
  CreatePageDto,
  UpdatePageContent
>({
  defaultFindOptions: {
    include: [gallery, MetaData],
  },
  includes: [gallery, MetaData],
  seedData: PageContentSeedData,
}) {
  constructor(
    @InjectModel(PageContent) private pageContent: typeof PageContent,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData)
    private metaData: typeof MetaData,
  ) {
    super(pageContent, reqParams);
  }
  async update<pageContent>(
    data: UpdatePageContent,
    slug: string,
  ): Promise<pageContent> {
    const pagecontent = await this.pageContent.findOne({
      where: { slug: slug },
    });
    const updatedpagecontent = await super.update(data, pagecontent.id);
    return updatedpagecontent;
  }

  async updatePageImage(file: Express.Multer.File, id: string) {
    
    try {
      const page = await this.getOne<PageContent>(id);
      if (!page) {
        throw new InternalServerErrorException("Card not found");
      } 
      
      const defaultImagePath = 'backend/src/public/media/default.png'; 
      const filePath = join(__dirname, '../../../../', 'backend/src/public/' + page.coverImage);
      
      if (file && file.filename) {
        const newImagePath = '/media/pageContent/' + file.filename;
  
        if (fs.existsSync(filePath)&& filePath!=defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }
  
        await page.update({
          coverImage: newImagePath,
        });
  
        return 'page Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOneByName(slug: string): Promise<PageContent | null> {
    return PageContent.findOne({
      where: {
        [Op.or]: [{ slug: slug }, { name: slug }],
      },
      include: [gallery, MetaData],
    });
  }
}
