import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEventFeatureDTO {
  @IsString()
  @IsNotEmpty()
  eventId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desription: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  order: number;
}

export class UpdateEventFeatureDTO extends PartialType(CreateEventFeatureDTO) {}
