import { IsNotEmpty, IsString } from 'class-validator';

export class AssociationsDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subTitle: string;

  @IsNotEmpty()
  course_specialization_id: string;
}
