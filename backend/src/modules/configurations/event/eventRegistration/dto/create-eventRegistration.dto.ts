import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EventRegistrationdto {
    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    lastName:string
 
    @IsString()
    @IsNotEmpty()
    mobileNumber:string

    @IsEmail()
    email:string

    @IsString()
    @IsNotEmpty()
    degree:string   

}