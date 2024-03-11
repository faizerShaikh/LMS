import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { MetaData } from '../../metaData/meta.model';
import { MetaDataDto } from '../../metaData/dto';

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
    endDayTime: Date;

    @IsString()
    deadLine: Date;

    @IsString()
    @IsNotEmpty()
    created_by_id: string;

    @IsBoolean()
    isFeatured: boolean;

    @IsString()
    @IsNotEmpty()
    slug:string

}