import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { MetaData } from '../../Meta Data/meta.model';

export class CreateUniversityDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  short_name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  // @IsNotEmpty()
  // @IsObject()
  // @Type(()=>MetaData)
  // @ValidateNested({each:true})
  // metaData:MetaData
}
