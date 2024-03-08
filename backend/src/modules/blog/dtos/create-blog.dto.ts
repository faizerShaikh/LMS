import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { User } from 'src/modules/user/users/models/user.model';

export class CreateBlogDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  blog_category_id: string;

  @IsBoolean()
  @IsOptional()
  is_featured:boolean

  @IsString()
  @IsNotEmpty()
  slug:string
}
