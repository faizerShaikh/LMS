import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Course } from './model';
import { CreateCourseDTO, UpdateCourseDTO } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { MetaData } from '../MetaData/meta.model';
import * as fs from 'fs';
import { CourseSpecialization } from '../course-specialization/model';
@Injectable()
export class CourseService extends GenericService<
  Course,
  CreateCourseDTO,
  UpdateCourseDTO
>({
  defaultFindOptions: {
    include: [MetaData,CourseSpecialization],
  },
  includes: [MetaData,CourseSpecialization],
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
        where: { course_level: 'master' },
        include: [MetaData],
      });
  
      const bachelorCourses = await this.course.findAll<Course>({
        where: { course_level: 'bachelor' },
        include: [MetaData],
      });
      
      // Assuming 'underGrad' is meant to be 'Undergrad'
      const underGradCourses = await this.course.findAll<Course>({
        where: { course_level: 'underGrad' },
        include: [MetaData],
      });
  
      const University = await this.course.findAll<Course>({
        include: [
          {
            model: CourseSpecialization,
            where: { courseType: 'university' },
          },
        ],
      });
      
      const customCourse = await this.course.findAll<Course>({
        include: [
          {
            model: CourseSpecialization,
            where: { courseType: 'customCourse' }, // Corrected typo 'customCoures' to 'customCourse'
          },
        ],
      });
      // Format the response according to the desired structure
      const groupedCourses = {
      Master:  mastersCourses ,
      Bachelor:bachelorCourses ,
      underGrad:underGradCourses ,
      CustomCourse:customCourse,
      University:University
    };
  
      return groupedCourses;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async updateCourseImage(file: Express.Multer.File, id: string) {
    try {
      const course = await this.course.findByPk<Course>(id);
      if (!course) {
        throw new InternalServerErrorException('Event not found');
      }

      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + course.course_image,
      );

      if (file && file.filename) {
        const newImagePath = 'media/course/' + file.filename;

        if (fs.existsSync(filePath) && filePath != defaultImagePath) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await course.update({
          course_image: newImagePath,
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
