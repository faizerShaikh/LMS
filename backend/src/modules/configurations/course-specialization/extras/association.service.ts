import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { join } from 'path';
import { unlink } from 'fs';
import * as fs from 'fs';
import { AssociationsDTO } from '../dtos/associations.dto';
import { Associations } from '../model/associations.model';

@Injectable()
export class AssociationService extends GenericService<
  Associations,
  AssociationsDTO,
  AssociationsDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(Associations)
    private associationModel: typeof Associations,

    private reqParams: RequestParamsService,
  ) {
    super(associationModel, reqParams);
  }

  async updateAssociationImage(file: Express.Multer.File, id: string) {
    const association = await this.getOne<Associations>(id);
    const defaultImagePath = 'backend/src/public/media/default.png';
    const filePath = join(
      __dirname,
      '../../../../',
      '/src/public/' + association.image,
    );

    if (fs.existsSync(filePath)) {
      unlink(filePath, (err) => {
        if (err) {
          throw new InternalServerErrorException(err);
        }
        console.log('file deleted...');
      });
    }

    await association.update({
      image: '/media/course-specialization/extras/' + file.filename,
    });
    return 'Association Image Uploaded Successfully';
  }
}
