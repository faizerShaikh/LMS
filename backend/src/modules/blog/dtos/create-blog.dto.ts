import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBlogDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
