import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Webinar } from "./webinar.model";
import { WebinarService } from "./webinar.service";
import { WebinarController } from "./webinar.controller";

@Module({
imports:[SequelizeModule.forFeature([Webinar])],
providers:[WebinarService],
controllers:[WebinarController]
})
export class WebinarModule{}