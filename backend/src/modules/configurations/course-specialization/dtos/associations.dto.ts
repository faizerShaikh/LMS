import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AssociationsDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNotEmpty()
  course_specialization_id: string;
}
