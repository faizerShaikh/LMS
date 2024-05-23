import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Leads } from "./lead.model";
import { LeadController } from "./lead.controller";
import { LeadService } from "./lead.service";

@Module({
    imports:[SequelizeModule.forFeature([Leads])],
    controllers:[LeadController],
    providers:[LeadService]
})
export class LeadModule{}