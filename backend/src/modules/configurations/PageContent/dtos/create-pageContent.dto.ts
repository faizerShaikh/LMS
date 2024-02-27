import { IsNotEmpty, IsObject, IsString, IsUUID, ValidateNested } from 'class-validator';
import { MetaData } from '../../metaData/meta.model';
import { Type } from 'class-transformer';
import { MetaDataDto } from '../../metaData/dto';

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
