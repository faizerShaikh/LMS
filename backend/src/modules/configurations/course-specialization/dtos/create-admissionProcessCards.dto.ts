import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAdmissionProcessCardsDTO{


    @IsString()
    @IsOptional()
    image:string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsNotEmpty()
    @IsString()
    description:string

    @IsNotEmpty()
    @IsString()
    course_specialization_id:string
}