import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateFaqDTO{
    @IsString()
    question:string

    @IsBoolean()
    @IsOptional()
    visiblity:boolean
}