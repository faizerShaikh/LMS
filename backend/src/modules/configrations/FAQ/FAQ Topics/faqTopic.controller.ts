import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { FaqTopic } from "./faqTopic.model";
import { FaqTopicDto } from "./faqTopic.dto";
import { UpdateFaqTopic } from "./updateFaqTopic.dto";
import { faqTopicService } from "./faqTopic.service";

@Controller('configrations/faq-topics')
export class faqTopicController extends GenericController<FaqTopic,FaqTopicDto,UpdateFaqTopic>({
    createObjDTO:FaqTopicDto,
    updateObjDTO:UpdateFaqTopic
}){
    constructor(private readonly faqTopicService:faqTopicService){super(faqTopicService)}
}