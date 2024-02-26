import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Events } from "./event.model";
import { eventController } from "./event.controller";
import { eventService } from "./event.service";

@Module({
    imports:[SequelizeModule.forFeature([Events])],
    controllers:[eventController],
    providers:[eventService],
})
export class EventModule{}