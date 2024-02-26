import { Type } from 'class-transformer';
import { IsString, IsEmpty, IsObject, IsNotEmpty } from 'class-validator';
import { PageContent } from '../../PageContent/pageContent.model';

export class GalleryDto {

    coverImage: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    
    @IsNotEmpty()
    pageId: string;

}
