import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { GlobalPartner } from './global-partner.model';
import { join } from 'path';
import { unlink } from 'fs';

@Injectable()
export class GlobalPartnerService extends GenericService({}) {
  constructor(
    @InjectModel(GlobalPartner) private globalPartner: typeof GlobalPartner,
    private reqParams: RequestParamsService,
  ) {
    super(globalPartner, reqParams);
  }

  async UpdateImages(
    file: Express.Multer.File,
    id: string,
    feild: 'coverImage' | 'backgroundImage',
  ) {
    const Partner = await this.getOne<GlobalPartner>(id);
    const existingImage = Partner[feild];

    if (existingImage) {
      unlink(
        join(__dirname, '../../../../', '/src/public/' + existingImage),
        (err) => {
            if(err){
                throw new InternalServerErrorException(err);
            }
            console.log('file deleted.... ')
        },
      );
    }

    await Partner.update({
        existingImage:'/media/global-partner'+file.filename
    })
    return 'Image uploaded Successfully'
  }
}
