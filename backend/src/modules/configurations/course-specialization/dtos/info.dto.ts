import { IsNotEmpty, IsString } from 'class-validator';

export class InfoDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  course_specialization_id: string;
}
