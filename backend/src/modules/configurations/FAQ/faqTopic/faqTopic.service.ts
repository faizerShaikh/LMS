import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { FaqTopic } from "./faqTopic.model";

@Injectable()
export class faqTopicService extends GenericService({}){
    constructor(
        @InjectModel(FaqTopic) private faqTopic:typeof FaqTopic,
        private reqParams:RequestParamsService

    ){
        super(faqTopic,reqParams)
    }

    async bulkcreate(data:any[]){
        const bulkcreate= await this.faqTopic.bulkCreate(data)
        console.log(bulkcreate)
        return bulkcreate
    }
}