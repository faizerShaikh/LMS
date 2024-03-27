import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EventRegistrationdto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  experience: string;

  @IsString()
  degree: string;

  @IsString()
  @IsOptional()
  eventId: string;

  @IsString()
  @IsOptional()
  webinarId: string;
}
