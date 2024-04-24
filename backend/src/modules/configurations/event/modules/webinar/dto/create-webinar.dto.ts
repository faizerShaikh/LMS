import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { CreateEventDTO } from '../../../dtos';

export class CreateWebinarDto extends CreateEventDTO {
  @ValidateNested({ each: true })
  @Type(() => SpeakerDto)
  @IsOptional()
  speakers: SpeakerDto[];

  @IsNotEmpty()
  @IsString()
  agenda: string;

  
  @Type(() => CreateEventDTO)
  @ValidateNested({ each: true })
  event:CreateEventDTO
}

export class SpeakerDto {
  @IsString()
  name: string;

  @IsString()
  bio: string;

  @IsString()
  @IsOptional()
  image: string = '/media/Author.png';

  
  @IsString()
  @IsOptional()
  linkdIn:string
}
