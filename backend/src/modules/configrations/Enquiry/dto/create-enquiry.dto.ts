import { IsString, IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { type, status } from './enquiry.enum';

export class EnquiryDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    organization: string;

    @IsString()
    title: string;

    @IsEmail()
    email: string;

    @IsEnum(type)
    type: type;

    @IsOptional()
    @IsEnum(status)
    status: status;
}
