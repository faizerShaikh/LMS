import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { GlobalPartner } from './global-partner.model';
import { join } from 'path';
import { unlink } from 'fs';
import { MetaData } from '../MetaData/meta.model';

@Injectable()
export class GlobalPartnerService extends GenericService({
  defaultFindOptions: {
    include: [MetaData],
  },
  includes: [MetaData],
}) {
  constructor(
    @InjectModel(GlobalPartner) private globalPartner: typeof GlobalPartner,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData)
    private metaData: typeof MetaData,
  ) {
    super(globalPartner, reqParams);
  }

  async UpdateImages(file: Express.Multer.File, id: string) {
    const Partner = await this.getOne<GlobalPartner>(id);
    const existingImage = Partner['coverImage'];

    if (existingImage) {
      unlink(
        join(__dirname, '../../../../', '/src/public/' + existingImage),
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log('file deleted.... ');
        },
      );
    }

    await Partner.update({
      coverImage: '/media/global-partner/' + file.filename,
    });
    return 'Image uploaded Successfully';
  }
}
