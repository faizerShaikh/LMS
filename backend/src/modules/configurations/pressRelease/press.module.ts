import { Module } from "@nestjs/common";
import { Press } from "./press.model";
import { PressController } from "./press.controller";
import { PressService } from "./press.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { MetaData } from "../metaData/meta.model";

@Module({
    imports:[SequelizeModule.forFeature([Press])],
    controllers:[PressController],
    providers:[PressService]
})
export class PressModule{}