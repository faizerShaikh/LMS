import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class FaqTopicDto {

    @IsString()
    @IsNotEmpty()
    topic: string;

    @IsString()
    @IsNotEmpty()
    answer: string;

    @IsUUID(4)
    @IsNotEmpty()
    faqId: string;
}
