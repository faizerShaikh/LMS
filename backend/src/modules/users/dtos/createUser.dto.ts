import { Exclude } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  contact?: string;

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;

  @Exclude()
  password?: string;

  @IsOptional()
  id?: string;
}
