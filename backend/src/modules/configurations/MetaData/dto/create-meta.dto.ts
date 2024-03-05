
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class MetaDataDto {
  id:string

  @IsOptional()
  @IsString()
  keywords: string;

  @IsOptional()
  @IsString()
  title:string

  @IsOptional()
  @IsString()
  @Length(1, 150)
  description: string;

  @IsOptional()
  @IsString()
  subject: string;

  @IsOptional()
  @IsString()
  copyright: string;

  @IsOptional()
  @IsString()
  summary: string;

  @IsOptional()
  @IsString()
  classification: string;

  @IsOptional()
  @IsString()
  author: string;

  @IsOptional()
  @IsString()
  owner: string;

  @IsOptional()
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  pageName: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  subtitle: string;

  @IsOptional()
  @IsString()
  replyTo: string;

  @IsOptional()
  @IsBoolean()
  isRefrenced: boolean;

  @IsOptional()
  @IsString()
  slug: string;

}
