import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { CourseSpecialization } from './model';
import {
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO,
} from './dtos';
import { CourseSpecializationService } from './course-specialization.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('configurations/course-specialization')
export class CourseSpecializationController extends GenericController<
  CourseSpecialization,
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO
>({
  createObjDTO: CreateCourseSpecializationDTO,
  updateObjDTO: UpdateCourseSpecializationDTO,
}) {
  constructor(private readonly courseService: CourseSpecializationService) {
    super(courseService);
  }

  @Put('cover-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'cover_image',
      path: '/media/course-specialization/cover-image',
    }),
  )
  updateCourseSpecializationImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.courseService.updateCourseSpecializationImage(file, id);
  }

  @Put('update-obj-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.any,
      fieldName:'image',
      path: '/media/course-specialization/extras',
    }),
  )
  async createCourseSpecialization(
    @UploadedFile() files: Express.Multer.File[],
    @Param('id') id: string,
     dto : CreateCourseSpecializationDTO,
     @Body() body : CourseSpecialization
  ) {
    return this.courseService.createOtherObjects(dto, body,true);
  }
}
