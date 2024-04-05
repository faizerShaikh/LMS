import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class GlobalPartnerDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  vision: string;

  @IsNotEmpty()
  @IsString()
  objective: string;

  @IsNotEmpty()
  @IsString()
  popular_course: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}
