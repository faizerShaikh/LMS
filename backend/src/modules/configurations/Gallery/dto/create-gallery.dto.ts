import { Type } from 'class-transformer';
import { IsString, IsEmpty, IsObject, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { PageContent } from '../../PageContent/pageContent.model';

export class GalleryDto {
  coverImage: string;

  @IsOptional()
  @IsNumber()
  orderBy: number;
  
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    pageId:string

}
