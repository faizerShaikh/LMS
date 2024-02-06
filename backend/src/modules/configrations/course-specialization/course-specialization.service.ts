import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CourseSpecialization } from './model';
import {
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO,
} from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class CourseSpecializationService extends GenericService<
  CourseSpecialization,
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO
>({}) {
  constructor(
    @InjectModel(CourseSpecialization)
    private courseSpecialization: typeof CourseSpecialization,
    private reqParams: RequestParamsService,
  ) {
    super(courseSpecialization, reqParams);
  }

  async updateCourseSpecializationImage(file: Express.Multer.File, id: string) {
    const courseSpecialization = await this.getOne<CourseSpecialization>(id);

    if (courseSpecialization.cover_image) {
      unlink(
        join(
          __dirname,
          '../../../../',
          'src/public/media' + courseSpecialization.cover_image,
        ),
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await courseSpecialization.update({
      cover_image: file?.path?.split('src/public')[1],
    });
    return 'Course Specialization Cover Image Uploaded Successfully';
  }
}
