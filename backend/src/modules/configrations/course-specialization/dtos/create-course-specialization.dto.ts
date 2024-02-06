import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseSpecializationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
