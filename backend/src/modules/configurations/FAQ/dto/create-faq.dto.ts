import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MetaDataDto } from "../../metaData/dto";

export class CreateFaqDTO{
    @IsString()
    question:string

    @IsBoolean()
    @IsOptional()
    visiblity:boolean

    @IsNotEmpty()
    @IsObject()
    @Type(()=>MetaDataDto)
    @ValidateNested({each:true})
    metaData:MetaDataDto
}