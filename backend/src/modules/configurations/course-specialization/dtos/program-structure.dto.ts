import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProgramStructureDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsOptional()
  @IsString()
  description:string

  @IsNotEmpty()
    @IsString()
    course_specialization_id:string
}
