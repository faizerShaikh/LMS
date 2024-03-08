import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Events } from "./event.model";
import { eventController } from "./event.controller";
import { eventService } from "./event.service";
import { MetaData } from "../metaData/meta.model";
import { EventRegistration } from "./eventRegistration/eventRegistration.model";
import { EventRegistrationController } from "./eventRegistration/eventRegistration.controller";
import { EventRegistrationService } from "./eventRegistration/eventRegistration.service";

@Module({
    imports:[SequelizeModule.forFeature([Events,MetaData,EventRegistration])],
    controllers:[eventController,EventRegistrationController],
    providers:[eventService,EventRegistrationService],
})
export class EventModule{}