import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

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
}