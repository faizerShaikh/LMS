import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdmissionProcessCardsDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  course_specialization_id: string;
}
