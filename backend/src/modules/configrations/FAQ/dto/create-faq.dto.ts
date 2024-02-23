import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { MetaData } from "../../Meta Data/meta.model";
import { Type } from "class-transformer";

export class CreateFaqDTO{
    @IsString()
    question:string

    @IsBoolean()
    @IsOptional()
    visiblity:boolean

    @IsNotEmpty()
    @IsObject()
    @Type(()=>MetaData)
    @ValidateNested({each:true})
    metaData:MetaData
}