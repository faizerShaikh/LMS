import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProgramStructureDTO } from './program-structure.dto';
import { FeesStructureDTO } from './fees-structure.dto';
import { Type } from 'class-transformer';
import { MetaData } from '../../metaData/meta.model';

export class CreateCourseSpecializationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  eligibilty: string;

  @IsString()
  @IsNotEmpty()
  delivery_mode: string;

  @IsNumber()
  @IsNotEmpty()
  credits: number;

  @IsBoolean()
  @IsNotEmpty()
  is_internationally_recognised: boolean;

  @IsString()
  @IsNotEmpty()
  learning_pedagogy: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsString()
  @IsNotEmpty()
  medium_of_instructions: string;

  @IsBoolean()
  @IsNotEmpty()
  certificate_provided: boolean;

  @IsBoolean()
  @IsNotEmpty()
  is_published: boolean;

  @IsString()
  @IsNotEmpty()
  university_id: string;

  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => ProgramStructureDTO)
  @ValidateNested({ each: true })
  program_structures: ProgramStructureDTO[];

  @IsNotEmpty()
  @IsObject()
  @Type(() => FeesStructureDTO)
  @ValidateNested({ each: true })
  fees_structure: FeesStructureDTO;

  @IsNotEmpty()
  @IsObject()
  @Type(()=>MetaData)
  @ValidateNested({each:true})
  metaData:MetaData
}
