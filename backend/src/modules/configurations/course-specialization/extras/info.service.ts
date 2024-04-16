import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { InfoDTO } from '../dtos/info.dto';
import { Info } from '../model/info.model';
import { unlink } from 'fs';
import { join } from 'path';
import * as fs from 'fs';


@Injectable()
export class InfoService extends GenericService<
  Info,
  InfoDTO,
  InfoDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(Info)
    private infoModel: typeof Info,

    private reqParams: RequestParamsService,
  ) {
    super(infoModel, reqParams);
  }
  async updateInfoImage(file: Express.Multer.File, id: string) {
    const info = await this.getOne<Info>(id);
    const defaultImagePath = 'backend/src/public/media/default.png';
    const filePath = join(
      __dirname,
      '../../../../',
      '/src/public/' + info.image,
    );

    if (fs.existsSync(filePath)) {
      unlink(filePath, (err) => {
        if (err) {
          throw new InternalServerErrorException(err);
        }
        console.log('file deleted...');
      });
    }

    await info.update({
      image: '/media/default.png', // Update with your desired path
    });
    return 'Info Image Uploaded Successfully';
  }

  async createInfoForCourseSpecialization(courseSpecializationId: string, infoDTO: any) {
    try {
      console.log('Creating info for course specialization ID:', courseSpecializationId);
      
      // Here you can create your info based on the provided data
      const info = await this.infoModel.create({
        ...infoDTO, course_specialization_id: courseSpecializationId,
      });
  
      console.log('Info created:', info);
  
      return info;
    } catch (error) {
      console.error('Error creating info:', error);
      throw new InternalServerErrorException('Error creating info');
    }
  }

  async getInfoByCourseSpecializationId(courseSpecializationId: string) {
    try {
      console.log('Fetching info for course specialization ID:', courseSpecializationId);
      const info = await Info.findAll({
        where: { course_specialization_id: courseSpecializationId },
      });
      console.log('Found info:', info);
      if (!info) {
        console.log('No info found');
        throw new NotFoundException('Info not found for the given course specialization ID');
      }
      return info;
    } catch (error) {
      console.error('Error fetching info:', error);
      throw new InternalServerErrorException(error.message);
    }
  }

 
}
