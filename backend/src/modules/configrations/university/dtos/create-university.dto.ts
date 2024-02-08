import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUniversityDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  short_name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
