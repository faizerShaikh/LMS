import { Module } from "@nestjs/common";
import { MetaData } from "./meta.model";
import { MetaDataController } from "./meta.controller";
import { MetaDataService } from "./meta.service";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports:[SequelizeModule.forFeature([MetaData])],
    controllers:[MetaDataController],
    providers:[MetaDataService]
})
export class MetaDataModule{}