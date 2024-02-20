import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
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

    @IsEnum(status)
    status: status;
}
