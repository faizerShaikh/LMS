import {
    IsString,
    IsDate,
    IsOptional,
} from 'class-validator';

export class ApplicationFormDTO {
    @IsOptional()
    @IsString()
    fullName: string;

    @IsOptional()
    @IsString()
    mobileNumber: string;

    @IsOptional()
    @IsString()
    emailID: string;

    @IsOptional()
    @IsString()
    dateOfBirth: Date;

    @IsOptional()
    @IsString()
    gender: string;

    @IsOptional()
    @IsString()
    nationality: string;

    @IsOptional()
    @IsString()
    governmentIDType: string;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsString()
    state: string;

    @IsOptional()
    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    howDoYouKnowAboutRiseBack: string;

    @IsOptional()
    @IsString()
    universityName: string;

    @IsOptional()
    @IsString()
    selectCourse: string;

    @IsOptional()
    @IsString()
    specialization: string;
}
