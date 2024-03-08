import { IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  slug:string

}
