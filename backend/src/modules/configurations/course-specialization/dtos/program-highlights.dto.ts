import { IsNotEmpty, IsString } from 'class-validator';

export class ProgramHighlightDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  course_specialization_id: string;
}
