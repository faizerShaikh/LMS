import {
    IsString,
    IsDate,
    IsOptional,
} from 'class-validator';

export class ApplicationFormDTO {
    @IsString()
    fullName: string;

    @IsString()
    mobileNumber: string;

    @IsString()
    emailID: string;

    @IsDate()
    dateOfBirth: Date;

    @IsString()
    gender: string;

    @IsString()
    nationality: string;

    @IsString()
    governmentIDType: string;

    @IsString()
    country: string;

    @IsString()
    state: string;

    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    howDoYouKnowAboutRiseBack: string;

    @IsString()
    universityName: string;

    @IsString()
    selectCourse: string;

    @IsString()
    specialization: string;
}
