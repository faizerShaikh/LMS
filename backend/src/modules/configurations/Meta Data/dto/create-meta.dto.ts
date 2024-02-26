
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
  title:string

  @IsNotEmpty()
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
  @IsEnum(type)
  type: type;

  @IsOptional()
  @IsBoolean()
  isRefrenced: boolean;

  @IsOptional()
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
