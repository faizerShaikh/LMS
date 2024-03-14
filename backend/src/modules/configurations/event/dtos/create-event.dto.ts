import { IsBoolean, IsNotEmpty,  IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateEventDTO{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsOptional()
    eventImage:string

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

    @IsString()
    @IsNotEmpty()
    eventLocation:string

    @IsString()
    @IsNotEmpty()
    eventType:string

    @IsString()
    @IsOptional()
    webinarId:string
    

}