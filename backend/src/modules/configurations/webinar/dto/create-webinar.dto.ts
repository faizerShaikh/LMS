
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsEmail, IsOptional, ValidateNested, isArray } from 'class-validator';


export class CreateWebinarDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    coverImage: string;

    // @ValidateNested({ each: true })
    // @Type(() => SpeakerDto)
    // @IsOptional()
    // speakers: SpeakerDto[];

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    agenda: string;

    @IsString()
    @IsNotEmpty()
    slug:string
    
}


// export class SpeakerDto {

//     @IsString()
//     name: string;
    
//     @IsString()
//     bio: string;
    
//     @IsString()
//     @IsOptional()
//     image: string;
// }