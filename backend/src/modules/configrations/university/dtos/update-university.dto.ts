import { PartialType } from '@nestjs/mapped-types';
import { CreateUniversityDTO } from './create-university.dto';

export class UpdateUniversityDTO extends PartialType(CreateUniversityDTO) {}
