import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

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

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    coverImage: string;

    @IsBoolean()
    @IsNotEmpty()
    isFeatured: string;
}
