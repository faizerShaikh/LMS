import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Course } from './model';
import { CreateCourseDTO, UpdateCourseDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class CourseService extends GenericService<
  Course,
  CreateCourseDTO,
  UpdateCourseDTO
>({}) {
  constructor(
    @InjectModel(Course) private course: typeof Course,
    private reqParams: RequestParamsService,
  ) {
    super(course, reqParams);
  }

  async updateCourseImage(file: Express.Multer.File, id: string) {
    const course = await this.getOne<Course>(id);

    if (course.course_image) {
      unlink(
        join(
          __dirname,
          '../../../../',
          'src/public/media' + course.course_image,
        ),
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await course.update({
      course_image: file?.path?.split('src/public')[1],
    });
    return 'Course Image Uploaded Successfully';
  }
}
