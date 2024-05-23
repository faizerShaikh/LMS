import { IsOptional, IsString } from "class-validator"
import { leadStatusEnum } from "./leadStatus.enum"

export class CreateLeadDto {


    @IsString()
    @IsOptional()
    leadStatus:leadStatusEnum

    @IsString()
    @IsOptional()
    assignedTo : string

    @IsOptional()
    @IsString() 
    applicationId : string

}