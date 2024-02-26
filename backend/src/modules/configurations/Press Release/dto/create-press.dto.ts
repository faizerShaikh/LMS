import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsObject, ValidateNested } from 'class-validator';
import { MetaData } from '../../Meta Data/meta.model';

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
    
    @IsNotEmpty()
    @IsObject()
    @Type(()=>MetaData)
    @ValidateNested({each:true})
    metaData:MetaData
}
