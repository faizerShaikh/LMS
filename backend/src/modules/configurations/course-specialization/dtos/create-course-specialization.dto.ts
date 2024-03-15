import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProgramStructureDTO } from './program-structure.dto';
import { FeesStructureDTO } from './fees-structure.dto';
import { Type } from 'class-transformer';
import { MetaData } from '../../metaData/meta.model';
import { SpeakerDto } from '../../webinar/dto/create-webinar.dto';
import { AdmissionProcessCards } from '../model/admissionProcess.model';
import { CreateAdmissionProcessCardsDTO } from './create-admissionProcessCards.dto';

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
  
  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsBoolean()
  @IsOptional()
  certificate_provided: boolean;

  @IsBoolean()
  @IsNotEmpty()
  is_published: boolean;

  @IsNumber()
  @IsOptional()
  student_enrolled: number

  @IsBoolean()
  @IsNotEmpty()
  webinar: boolean;

  @IsNumber()
  @IsNotEmpty()
  courses: number

  @IsString()
  @IsNotEmpty()
  learningPath: string;

  @IsString()
  @IsNotEmpty()
  brouchre:string

  @IsString()
  @IsNotEmpty()
  university_id: string;

  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsString()
  @IsOptional()
  specialization:string

  @IsString()
  @IsOptional()
  beneficiaries:string

  @ValidateNested({ each: true })
  @Type(()=> SpeakerDto)
  association:SpeakerDto[]

  @IsNumber()
  @IsNotEmpty()
  course : number

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
  @IsArray()
  @Type(()=>CreateAdmissionProcessCardsDTO)
  @ValidateNested({each:true})
  admissionProcess:CreateAdmissionProcessCardsDTO[]

  @IsString()
  @IsNotEmpty()
  slug:string

}
