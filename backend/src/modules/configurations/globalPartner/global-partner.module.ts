import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GlobalPartner } from "./global-partner.model";
import { GlobalPartnerController } from "./global-partner.controller";
import { GlobalPartnerService } from "./global-partner.service";
import { MetaData } from "../metaData/meta.model";

@Module({
    imports:[SequelizeModule.forFeature([GlobalPartner,MetaData])],
    controllers:[GlobalPartnerController],
    providers:[GlobalPartnerService]
})
export class GlobalPartnerModule{
    
}