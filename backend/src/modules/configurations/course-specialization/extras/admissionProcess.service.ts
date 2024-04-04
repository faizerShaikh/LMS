import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { AdmissionProcessCards } from '../model/admissionProcess.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdmissionProcessCardsDTO } from '../dtos';
import { join } from 'path';
import { unlink } from 'fs';
import * as fs from 'fs';

@Injectable()
export class AdmissionProcessService extends GenericService<
  AdmissionProcessCards,
  CreateAdmissionProcessCardsDTO,
  CreateAdmissionProcessCardsDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(AdmissionProcessCards)
    private admissionProcess: typeof AdmissionProcessCards,

    private reqParams: RequestParamsService,
  ) {
    super(admissionProcess, reqParams);
  }

  async updateAdmissionProcessImage(file: Express.Multer.File, id: string) {
    if (file) {
      const admissionProcess = await this.getOne<AdmissionProcessCards>(id);
      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        '/src/public/' + admissionProcess.image,
      );

      if (fs.existsSync(filePath)) {
        unlink(filePath, (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        });
      }

      await admissionProcess.update({
        image: '/media/admissionProcess/' + file.filename,
      });
    }
    return 'Admission Process Image Uploaded Successfully';
  }
}
