import { IsNotEmpty, IsObject, IsString, IsUUID, ValidateNested } from 'class-validator';
import { MetaData } from '../../Meta Data/meta.model';
import { Type } from 'class-transformer';
import { MetaDataDto } from '../../Meta Data/dto';

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

    @IsNotEmpty()
    @IsObject()
    @Type(()=>MetaDataDto)
    @ValidateNested({each:true})
    metaData:MetaDataDto
}
