import { Body, Controller ,Post, Put} from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { FaqTopic } from "./faqTopic.model";
import { FaqTopicDto } from "./faqTopic.dto";
import { UpdateFaqTopic } from "./updateFaqTopic.dto";
import { faqTopicService } from "./faqTopic.service";

@Controller('configurations/faq-topics')
export class faqTopicController extends GenericController<FaqTopic,FaqTopicDto,UpdateFaqTopic>({
    createObjDTO:FaqTopicDto,
    updateObjDTO:UpdateFaqTopic
}){
    constructor(private readonly faqTopicService:faqTopicService){super(faqTopicService)}
    @Post('/bulkcreate')
    async bulkCreate(@Body() data: any[]) {
      try {
        const result = await this.faqTopicService.bulkCreate(data);
        return { success: true, result };
      } catch (error) {
        console.error('Error in bulk create:', error);
        return { success: false, error: error.message };
      }
    }
}


