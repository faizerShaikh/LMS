import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { MetaData } from 'src/modules/configurations/metaData/meta.model';

export class CreateBlogDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  created_by_id: string;

  @IsString()
  @IsNotEmpty()
  blog_category_id: string;

  @IsBoolean()
  @IsOptional()
  is_featured:boolean

  @IsNotEmpty()
  @IsObject()
  @Type(()=>MetaData)
  @ValidateNested({each:true})
  metaData:MetaData

}
