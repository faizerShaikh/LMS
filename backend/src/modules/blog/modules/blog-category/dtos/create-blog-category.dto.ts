import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBlogCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
