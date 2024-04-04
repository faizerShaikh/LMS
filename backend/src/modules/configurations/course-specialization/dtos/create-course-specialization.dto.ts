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
  student_enrolled: number;

  @IsBoolean()
  @IsNotEmpty()
  webinar: boolean;

  @IsNumber()
  @IsNotEmpty()
  courses: number;

  @IsString()
  @IsNotEmpty()
  learningPath: string;

  @IsString()
  @IsNotEmpty()
  learningPedagogy: string;

  @IsString()
  @IsNotEmpty()
  brouchre: string;

  @IsString()
  @IsNotEmpty()
  university_id: string;

  @IsString()
  @IsNotEmpty()
  course_id: string;

  @IsBoolean()
  internationalRegonization: boolean;

  @IsString()
  @IsOptional()
  specialization: string;

  @IsString()
  @IsOptional()
  beneficiaries: string;

  @ValidateNested({ each: true })
  @Type(() => AssociationsDTO)
  association: AssociationsDTO[];

  @ValidateNested({ each: true })
  @Type(() => ProgramHighlightDTO)
  program_highlight: ProgramHighlightDTO[];

  @ValidateNested({ each: true })
  @Type(() => Associations)
  associations: Associations[];

  // @IsNumber()
  // @IsNotEmpty()
  // course: number;

  // @IsNotEmpty()
  // @IsArray()
  @Type(() => ProgramStructureDTO)
  @ValidateNested({ each: true })
  program_structures: ProgramStructureDTO[];

  // @IsNotEmpty()
  // @IsObject()
  @IsOptional()
  @Type(() => FeesStructureDTO)
  @ValidateNested({ each: true })
  fees_structure: FeesStructureDTO;

  // @IsNotEmpty()
  // @IsArray()
  @Type(() => CreateAdmissionProcessCardsDTO)
  @ValidateNested({ each: true })
  admissionProcess: CreateAdmissionProcessCardsDTO[];

  @IsString()
  @IsNotEmpty()
  slug: string;
}
