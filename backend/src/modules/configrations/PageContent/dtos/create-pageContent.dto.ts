import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreatePageDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    
    coverImage: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    titleDescription: string;

    @IsNotEmpty()
    @IsString()
    pageDescription: string;
}
