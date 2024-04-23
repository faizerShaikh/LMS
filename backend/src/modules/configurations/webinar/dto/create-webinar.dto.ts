
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional, ValidateNested, isArray, IsObject } from 'class-validator';
import { Events } from '../../event/event.model';
import { CreateEventDTO } from '../../event/dtos';


export class CreateWebinarDto {

    @ValidateNested({ each: true })
    @Type(() => SpeakerDto)
    @IsOptional()
    speakers: SpeakerDto[];

    @IsNotEmpty()
    @IsString()
    agenda: string;

    @IsObject()
    @IsNotEmpty()
    event:CreateEventDTO

}


export class SpeakerDto {

    @IsString()
    name: string;
    
    @IsString()
    bio: string;
    
    @IsString()
    @IsOptional()
    image: string='/media/Author.png';
}