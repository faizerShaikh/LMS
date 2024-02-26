import { IsNotEmpty,IsString,IsBoolean, IsOptional, IsObject, ValidateNested } from "class-validator";
import { MetaDataDto } from "../../Meta Data/dto";
import { Type } from "class-transformer";

export class GlobalPartnerDTO{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    coverImage: string;

    @IsOptional()
    @IsString()
    backgroundImage: string;


    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    vision: string;

    @IsNotEmpty()
    @IsString()
    objective: string;

    @IsNotEmpty()
    @IsBoolean()
    popular_course: boolean;

    @IsNotEmpty()
    @IsObject()
    @Type(()=>MetaDataDto)
    @ValidateNested({each:true})
    metaData:MetaDataDto
}