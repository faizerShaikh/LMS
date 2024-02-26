import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseSpecializationDTO } from './create-course-specialization.dto';

export class UpdateCourseSpecializationDTO extends PartialType(
  CreateCourseSpecializationDTO,
) {}
