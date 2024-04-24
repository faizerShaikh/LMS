import { IsNotEmpty, IsString } from 'class-validator';
import { CourseLevel } from './enum';

export class CreateCourseDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  course_level:CourseLevel;
}
