import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
