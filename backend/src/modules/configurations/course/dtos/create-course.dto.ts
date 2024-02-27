import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { MetaData } from '../../metaData/meta.model';
import { MetaDataDto } from '../../metaData/dto';

export class CreateCourseDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsObject()
  @Type(()=>MetaDataDto)
  @ValidateNested({each:true})
  metaData:MetaDataDto

}
