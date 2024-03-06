import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsObject, ValidateNested } from 'class-validator';

export class PressDTO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    link: string;


    @IsBoolean()
    @IsNotEmpty()
    isFeatured: string;
}
