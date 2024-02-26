import { PartialType } from "@nestjs/mapped-types";
import { FaqTopicDto } from "./faqTopic.dto";

export class UpdateFaqTopic extends PartialType(FaqTopicDto){
    
}