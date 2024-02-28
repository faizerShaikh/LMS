import { IsNotEmpty, IsNumber,  IsOptional, IsString } from 'class-validator';

export class CreatePageDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @IsOptional()
    orderBy:number

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
