import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsObject, ValidateNested } from 'class-validator';
import { MetaData } from '../../Meta Data/meta.model';
import { MetaDataDto } from '../../Meta Data/dto';

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
    @IsOptional()
    coverImage: string;

    @IsBoolean()
    @IsNotEmpty()
    isFeatured: string;
    
    @IsNotEmpty()
    @IsObject()
    @Type(()=>MetaDataDto)
    @ValidateNested({each:true})
    metaData:MetaDataDto
}
