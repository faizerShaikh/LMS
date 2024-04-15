import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProgramStructureDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  
image:string

  @IsNotEmpty()
  @IsString()
  course_specialization_id:string
}
