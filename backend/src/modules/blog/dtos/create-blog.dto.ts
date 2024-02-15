import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}
