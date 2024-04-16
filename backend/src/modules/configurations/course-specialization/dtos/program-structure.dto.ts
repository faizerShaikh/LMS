import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProgramStructureDTO {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  course_specialization_id:string
}
