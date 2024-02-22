import { Module } from "@nestjs/common";
import { Faq } from "./faq.model";
import { FaqTopic } from "./FAQ Topics/faqTopic.model";
import { FaqController } from "./faq.controller";
import { faqTopicController } from "./FAQ Topics/faqTopic.controller";
import { FaqService } from "./faq.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { FAQTopicModule } from "./FAQ Topics/faqTpoic.module";

@Module({
    imports:[SequelizeModule.forFeature([Faq]),FAQTopicModule],
    controllers:[FaqController],
    providers:[FaqService]
})
export class FAQModule{}