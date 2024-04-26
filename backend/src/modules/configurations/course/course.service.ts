import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Course } from './model';
import { CreateCourseDTO, UpdateCourseDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../MetaData/meta.model';
import * as fs from 'fs';
@Injectable()
export class CourseService extends GenericService<
  Course,
  CreateCourseDTO,
  UpdateCourseDTO
>({
  defaultFindOptions: {
    include: [MetaData],
  },
  includes: [MetaData],
}) {
  constructor(
    @InjectModel(Course) private course: typeof Course,
    private reqParams: RequestParamsService,
    @InjectModel(MetaData) private metaData: typeof MetaData,
  ) {
    super(course, reqParams);
  }

  async getCoursesGroupedByLevel() {
    try {
      const mastersCourses = await this.course.findAll<Course>({
        where: { course_level: 'masters' },
        include: [MetaData],
      });
      const bachelorCourses = await this.course.findAll<Course>({
        where: { course_level: 'bachelor' },
        include: [MetaData],
      });
      
      const underGrad = await this.course.findAll<Course>({
        where: { course_level: 'underGrad' },
        include: [MetaData],
      });
      return [
        { course_level: 'Masters', courses: mastersCourses },
        { course_level: 'Bachelor', courses: bachelorCourses },
        { course_level: 'underGrad', courses: underGrad },

      ];
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateCourseImage(file: Express.Multer.File, id: string) {
    try {
      const events = await this.course.findByPk<Course>(id);
      if (!events) {
        throw new InternalServerErrorException('Event not found');
      }

      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + events.course_image,
      );

      if (file && file.filename) {
        const newImagePath = '/media/course/' + file.filename;

        if (fs.existsSync(filePath) && filePath != defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await events.update({
          eventImage: newImagePath,
        });

        return 'course Image Uploaded Successfully';
      } else {
        return 'No file provided for Image Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
