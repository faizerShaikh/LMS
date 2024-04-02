import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProgramHighlightDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNotEmpty()
  course_specialization_id: string;
}
