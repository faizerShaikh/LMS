import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PageContent } from './pageContent.model';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CreatePageDto, UpdatePageContent } from './dtos';
import { unlink } from 'fs';
import * as fs from 'fs';
import { join } from 'path';
import { gallery } from '../Gallery/gallery.model';
import { MetaData } from '../metaData/meta.model';
import { Op } from 'sequelize';

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
    const page = await this.getOne<PageContent>(id);
    const filepath = join(
      __dirname,
      '../../../../',
      '/src/public/' + page.coverImage,
    );
    const defaultImagePath = join(
      __dirname,
      '../../../../',
      '/src/public/media/default.png',
    );

    if (filepath != defaultImagePath)
      if (fs.existsSync(filepath)) {
        unlink(filepath, (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        });
        await page.update({
          coverImage: '/media/pageContent/' + file.filename,
        });
        return 'Cover Image Uploaded Successfully';
      } else {
        await page.update({
          coverImage: 'media/pageContent/' + file.filename,
        });
        return 'Cover Image Uploaded Successfully';
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
