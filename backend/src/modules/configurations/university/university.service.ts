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
  },
  includes:[MetaData]
}) {
  constructor(
    @InjectModel(University) private university: typeof University,
    private reqParams: RequestParamsService,

  ) {
    super(university, reqParams);
  }

  async updateUniversityImage(file: Express.Multer.File, id: string) {
    try {
      const university = await this.getOne<University>(id);
      if (!university) {
        throw new InternalServerErrorException("Blog not found");
      }
  
      const defaultImagePath = 'backend/src/public/media/default.png'; 
      const filePath = join(__dirname, '../../../../', 'backend/src/public/' + university.university_image);
      
      if (file && file.filename) {
        if (fs.existsSync(filePath)&& filePath!=defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }else{
          console.log('not deleted')
        }
        const newImagePath = '/media/university/' + file.filename;
        await university.update({
          university_image : newImagePath,
        });
  
        return 'University Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

}
