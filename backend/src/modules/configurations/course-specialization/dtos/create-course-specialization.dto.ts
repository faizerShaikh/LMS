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
import { SpeakerDto } from '../../event/modules/webinar/dto/create-webinar.dto';
import { CreateAdmissionProcessCardsDTO } from './create-admissionProcessCards.dto';
import { AssociationsDTO } from './associations.dto';
import { ProgramHighlightDTO } from './program-highlights.dto';
import { Associations } from '../model/associations.model';
import { Infos } from '../model/info.model';

export class CreateCourseSpecializationDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  eligibilty: string;

  @IsString()
  @IsOptional()
  delivery_mode: string;

  @IsNumber()
  @IsOptional()
  credits: number;

  @IsString()
  @IsOptional()
  duration: string;

  @IsBoolean()
  @IsOptional()
  certificate_provided: boolean;

  @IsBoolean()
  @IsOptional()
  is_published: boolean;

  @IsString()
  @IsOptional()
  textarea:string

  @IsNumber()
  @IsOptional()
  student_enrolled: number;

  @IsBoolean()
  @IsOptional()
  webinar: boolean;

  @IsString()
  @IsOptional()
  days:string

  @IsString()
  @IsOptional()
  shortInfo:string

  @IsNumber()
  @IsOptional()
  courses: number;

  @IsString()
  @IsOptional()
  learningPath: string;

  @IsString()
  @IsOptional()
  learningPedagogy: string;

  @IsString()
  @IsOptional()
  brouchure: string;

  
  @IsString()
  @IsOptional()
  courseType: string;

  @IsString()
  @IsOptional()
  university_id: string;

  @IsString()
  @IsOptional()
  course_id: string;

  @IsString()
  @IsOptional()
  notes:string

  syllabus:string

  @IsBoolean()
  @IsOptional()
  internationalRegonization: boolean;

  @IsString()
  @IsOptional()
  specialization: string;

  @IsString()
  @IsOptional()
  beneficiaries: string;

  @ValidateNested({ each: true })
  @Type(() => AssociationsDTO)
  @IsOptional()
  association: AssociationsDTO[];

  @ValidateNested({ each: true })
  @Type(() => ProgramHighlightDTO)
  @IsOptional()
  program_highlight: ProgramHighlightDTO[];

  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => Associations)
  associations: Associations[];

  @ValidateNested({each:true})
  @IsOptional()
  @Type(()=>Infos)
  infos:Infos

  // @IsNumber()
  // @IsOptional()
  // course: number;

  // @IsOptional()
  // @IsArray()
  @Type(() => ProgramStructureDTO)
  @IsOptional()
  @ValidateNested({ each: true })
  program_structures: ProgramStructureDTO[];

  // @IsOptional()
  // @IsObject()
  @IsOptional()
  @Type(() => FeesStructureDTO)
  @ValidateNested({ each: true })
  fees_structure: FeesStructureDTO;

  // @IsOptional()
  // @IsArray()
  @Type(() => CreateAdmissionProcessCardsDTO)
  @IsOptional()
  @ValidateNested({ each: true })
  admissionProcess: CreateAdmissionProcessCardsDTO[];

  @IsString()
  @IsOptional()
  slug: string;
}
