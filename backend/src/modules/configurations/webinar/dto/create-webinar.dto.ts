import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateWebinarDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    coverImage: string;

    @IsNotEmpty()
    @IsString({ each: true }) 
    speakers: string[];

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    agenda: string;

    @IsString()
    @IsNotEmpty()
    slug:string
}