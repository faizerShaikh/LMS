import { Module } from "@nestjs/common";
import { FaqTopic } from "./faqTopic.model";
import { faqTopicService } from "./faqTopic.service";
import { faqTopicController } from "./faqTopic.controller";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports:[SequelizeModule.forFeature([FaqTopic])],
    controllers:[faqTopicController],
    providers:[faqTopicService]
})
export class FAQTopicModule{}