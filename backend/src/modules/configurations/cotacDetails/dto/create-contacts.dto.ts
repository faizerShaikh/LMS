import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MetaData } from '../../MetaData/meta.model';
import { Type } from 'class-transformer';

export class ContactsDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  website: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  addressIcon: string;

  @IsNotEmpty()
  @IsString()
  phoneIcon: string;

  @IsNotEmpty()
  @IsString()
  websiteIcon: string;

  @IsNotEmpty()
  @IsString()
  emailIcon: string;

  @IsObject()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => MetaData)
  metaData: MetaData;

  @IsNotEmpty()
  @IsString()
  globalPartnerID: string;

  @IsString()
  @IsNotEmpty()
  slug: string;
}
