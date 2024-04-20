// application.update.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { ApplicationFormDTO } from './create-application.dto';

export class UpdateApplicationDto extends PartialType(ApplicationFormDTO) {}
