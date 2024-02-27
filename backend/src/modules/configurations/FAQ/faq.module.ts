import { Module } from "@nestjs/common";
import { Faq } from "./faq.model";
import { FaqTopic } from "./faqTopic/faqTopic.model";
import { FaqController } from "./faq.controller";
import { faqTopicController } from "./faqTopic/faqTopic.controller";
import { FaqService } from "./faq.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { FAQTopicModule } from "./faqTopic/faqTpoic.module";
import { MetaData } from "../metaData/meta.model";

@Module({
    imports:[SequelizeModule.forFeature([Faq,MetaData]),FAQTopicModule],
    controllers:[FaqController],
    providers:[FaqService]
})
export class FAQModule{}