import { Injectable } from "@nestjs/common";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Faq } from "./faq.model";
import { CreateFaqDTO, UpdateFAQ } from "./dto";
import { InjectModel } from "@nestjs/sequelize";
import { FaqTopic } from "./FAQ Topics/faqTopic.model";

@Injectable()
export class FaqService extends GenericService<Faq,CreateFaqDTO,UpdateFAQ>({includes:FaqTopic}){
    constructor(@InjectModel(Faq)private faq: typeof Faq,private reqParams:RequestParamsService){super(faq,reqParams)}

}