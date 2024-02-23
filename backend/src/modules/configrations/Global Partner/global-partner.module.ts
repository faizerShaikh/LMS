import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GlobalPartner } from "./global-partner.model";
import { GlobalPartnerController } from "./global-partner.controller";
import { GlobalPartnerService } from "./global-partner.service";

@Module({
    imports:[SequelizeModule.forFeature([GlobalPartner])],
    controllers:[GlobalPartnerController],
    providers:[GlobalPartnerService]
})
export class GlobalPartnerModule{
    
}