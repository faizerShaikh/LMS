import {
  Controller,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Course } from './model';
import { CreateCourseDTO, UpdateCourseDTO } from './dtos';
import { CourseService } from './course.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('configurations/course')
export class CourseController extends GenericController<
  Course,
  CreateCourseDTO,
  UpdateCourseDTO
>({
  createObjDTO: CreateCourseDTO,
  updateObjDTO: UpdateCourseDTO,
}) {
  constructor(private readonly courseService: CourseService) {
    super(courseService);
  }

  @Put('course-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'course_image',
      path: '/media/course',
    }),
  )
  updateCourseImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.courseService.updateCourseImage(file, id);
  }
}
