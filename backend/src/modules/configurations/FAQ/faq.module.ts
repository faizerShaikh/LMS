import { Module } from "@nestjs/common";
import { Faq } from "./faq.model";
import { FaqTopic } from "./FAQ Topics/faqTopic.model";
import { FaqController } from "./faq.controller";
import { faqTopicController } from "./FAQ Topics/faqTopic.controller";
import { FaqService } from "./faq.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { FAQTopicModule } from "./FAQ Topics/faqTpoic.module";
import { MetaData } from "../Meta Data/meta.model";

@Module({
    imports:[SequelizeModule.forFeature([Faq,MetaData]),FAQTopicModule],
    controllers:[FaqController],
    providers:[FaqService]
})
export class FAQModule{}