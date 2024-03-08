import { Type } from 'class-transformer';
import { IsString, IsEmpty, IsObject, IsNotEmpty, IsOptional } from 'class-validator';
import { PageContent } from '../../PageContent/pageContent.model';

export class GalleryDto {

    coverImage: string;

    @IsOptional()
    @IsString()
    orderBy:number

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    slug:string
    
    // @IsNotEmpty()
    // pageId: string;

}
