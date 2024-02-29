import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { University } from './model';
import { CreateUniversityDTO, UpdateUniversityDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../metaData/meta.model';
import * as fs from 'fs'
@Injectable()
export class UniversityService extends GenericService<
  University,
  CreateUniversityDTO,
  UpdateUniversityDTO
>({
  defaultFindOptions:{
    include:[MetaData],
  }
}) {
  constructor(
    @InjectModel(University) private university: typeof University,
    private reqParams: RequestParamsService,

  ) {
    super(university, reqParams);
  }

  async updateUniversityImage(file: Express.Multer.File, id: string) {
    const university = await this.getOne<University>(id);
    const filePath=join(
      __dirname,
      '../../../../',
      'src/public' + university.university_image,
    )
    if (fs.existsSync(filePath)) {
      unlink(
        filePath,
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        }
      );
      await university.update({
        university_image: '/media/university/'+file.filename
      });
      return 'University Image Uploaded Successfully';
    }
    else{

      
      await university.update({
        university_image: '/media/university/'+file.filename
      });
      return 'University Image Uploaded Successfully';
    }
    }

}
