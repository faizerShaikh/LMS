import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { GlobalPartner } from './global-partner.model';
import { join } from 'path';
import { unlink } from 'fs';
import { MetaData } from '../metaData/meta.model';
import { Contacts } from '../cotacDetails/contact.model';
import { GlobalPartnerDTO, UpdateGlobalPartnerDTO } from './dto';
import { type } from '../metaData/dto/type.enum';

@Injectable()
export class GlobalPartnerService extends GenericService({
  includes: [MetaData, Contacts],
}) {
  constructor(
    @InjectModel(GlobalPartner) private globalPartner: typeof GlobalPartner,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData)
    private metaData: typeof MetaData,
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
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted.... ');
        },
      );
    }

    await Partner.update({
      existingImage: '/media/global-partner' + file.filename,
    });
    return 'Image uploaded Successfully';
  }

  async CreateOtherObject(
    dto: GlobalPartnerDTO | UpdateGlobalPartnerDTO,
    globalPartner: GlobalPartner,
    isNewRecord: boolean,
  ) {
    if (isNewRecord) {
      await this.metaData.create({
        ...dto.metaData,
        globalPartnerID: globalPartner.id,
        type: type.GLOBAL_PARTNER,
      });
    } else {
        if(dto.metaData)
        {
          await this.metaData.update<MetaData>(
            { ...dto.metaData },
            { where: { globalPartnerID: globalPartner.id } },
        );
        }
    }
  }

  async create<GlobalPartner>(dto: GlobalPartnerDTO,): Promise<GlobalPartner> {
    const globalPartner = await super.create(dto)
    await this.CreateOtherObject(dto,globalPartner,true);
    return globalPartner
  }


  async update<GlobalPartner >(data: GlobalPartnerDTO, id: string): Promise<GlobalPartner> {
    try{
      
    const globalPartner= await super.update(data,id) ;
    await this.CreateOtherObject(data,globalPartner,false);
    return globalPartner
    } catch (err){
      console.error("Error occurred in update method",err)
    } }

}
