import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../metaData/meta.model';
import * as fs from 'fs'
import { Webinar } from './webinar.model';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { UpdateWebinarDto } from './dto/update-webinar.dto';
import { EventRegistration } from '../event/eventRegistration/eventRegistration.model';
@Injectable()
export class WebinarService extends GenericService<
  Webinar,
  CreateWebinarDto,
  UpdateWebinarDto
>({
  defaultFindOptions:{
    include:[MetaData,EventRegistration],
  },
  includes:[MetaData,EventRegistration]
}) {
  constructor(
    @InjectModel(Webinar) private webinar: typeof Webinar,
    private reqParams: RequestParamsService,

  ) {
    super(webinar, reqParams);
  }

  async updateWebinarImage(file: Express.Multer.File, id: string) {
    try {
      const webinar = await this.getOne<Webinar>(id);
      if (!webinar) {
        throw new InternalServerErrorException("Blog not found");
      }
  
      const defaultImagePath = 'backend/src/public/media/default.png'; 
      const filePath = join(__dirname, '../../../../', 'backend/src/public/' + webinar.coverImage);
      
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
        const newImagePath = '/media/webinar/' + file.filename;
        await webinar.update({
          university_image : newImagePath,
        });
  
        return 'Webinar Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

}
