import { Type } from 'class-transformer';
import { IsString, IsEmpty, IsObject } from 'class-validator';
import { PageContent } from '../../PageContent/pageContent.model';

export class GalleryDto {
    @IsString()
    id: string;

    @IsString()
    coverImage: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsEmpty()
    pageId: string;

    
    @IsEmpty()
    @IsObject()
    @Type(() => PageContent)
    pageContent: any;
}
