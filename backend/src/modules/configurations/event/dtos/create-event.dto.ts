import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { MetaData } from '../../Meta Data/meta.model';
import { MetaDataDto } from '../../Meta Data/dto';

export class CreateEventDTO{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsString()
    eventImage: string;

    @IsString()
    startDayTime: string;

    @IsString()
    endDayTime: string;

    @IsString()
    @IsNotEmpty()
    created_by_id: string;

    @IsBoolean()
    isFeatured: boolean;

    @IsNotEmpty()
    @Type(()=>MetaDataDto)
    @ValidateNested({each:true})
    @IsObject()
    metaData:MetaDataDto
}