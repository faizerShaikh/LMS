import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Webinar } from "./webinar.model";
import { WebinarService } from "./webinar.service";
import { WebinarController } from "./webinar.controller";
import { Events } from "../event/event.model";

@Module({
imports:[SequelizeModule.forFeature([Webinar,Events])],
providers:[WebinarService],
controllers:[WebinarController]
})
export class WebinarModule{}