import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested, isNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { MetaDataDto } from "../../metaData/dto";

export class CreateFaqDTO{
    @IsString()
    question:string

    @IsNotEmpty()
    @IsNumber()
    orderBy:number

    @IsBoolean()
    @IsOptional()
    isFeatured:boolean

    
}