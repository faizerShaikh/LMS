
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { type } from './type.enum';
import { BelongsTo } from 'sequelize-typescript';
import { CourseSpecialization } from '../../course-specialization/model';
import { GlobalPartner } from '../../Global Partner/global-partner.model';
import { Contacts } from '../../Contact Details/contact.model';

export class MetaDataDto {
  
  @IsNotEmpty()
  @IsString()
  keywords: string;

  @IsNotEmpty()
  @IsString()
  str: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 150)
  description: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  copyright: string;

  @IsNotEmpty()
  @IsString()
  summary: string;

  @IsNotEmpty()
  @IsString()
  classification: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  owner: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsString()
  pageName: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  subtitle: string;

  @IsNotEmpty()
  @IsString()
  replyTo: string;

  @IsNotEmpty()
  @IsEnum(type)
  type: type;

  @IsOptional()
  @IsBoolean()
  isRefrenced: boolean;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  event_id:string

  
  @IsString()
  @IsOptional()
  faqID:string

  
  @IsString()
  @IsOptional()
  blogID:string

  @IsString()
  @IsOptional()
  courseSplID:CourseSpecialization

  @IsString()
  @IsOptional()
  pageID:string

  @IsString()
  @IsOptional()
  pressID:string

  @IsString()
  @IsOptional()
  universityID:string

  @IsString()
  @IsOptional()
  courseID:string

  @IsString()
  @IsOptional()
  globaPartnerID:GlobalPartner

  @IsString()
  @IsOptional()
  contactID:Contacts
}
