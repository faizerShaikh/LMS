import { SequelizeModule } from "@nestjs/sequelize";
import { Sequelize } from "sequelize";
import { PageContent } from "./pageContent.model";
import { Module } from "@nestjs/common";
import { PageContentController } from "./pageContent.controller";
import { PageContentService } from "./pageContent.service";

@Module({
    imports:[SequelizeModule.forFeature([PageContent])],
    controllers:[PageContentController],
    providers:[PageContentService]
})
export class PageContentModule{}