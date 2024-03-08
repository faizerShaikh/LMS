import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Course } from './model';
import { CreateCourseDTO, UpdateCourseDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../metaData/meta.model';
import { type } from '../metaData/dto/type.enum';
import * as fs from 'fs'
@Injectable()
export class CourseService extends GenericService<
  Course,
  CreateCourseDTO,
  UpdateCourseDTO
>({
  defaultFindOptions: {
    include: [MetaData],
  },
  includes:[MetaData]
}) {
  constructor(
    @InjectModel(Course) private course: typeof Course,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData) private metaData: typeof MetaData,
  ) {
    super(course, reqParams);
  }

  async updateCourseImage(file: Express.Multer.File, id: string) {
    const course = await this.getOne<Course>(id);
    const defaultImagePath='backend/src/public/media/default.png'; 
    const filePath= join(__dirname, '../../../../', '/src/public/' + course.course_image)

    if (fs.existsSync(filePath)) {
      unlink(
        filePath,
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await course.update({
      course_image: '/media/course/' + file.filename,
    });
    return 'Course Image Uploaded Successfully';
  }
}
