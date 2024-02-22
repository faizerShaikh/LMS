import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { gallery } from "./gallery.model";
import { GalleryController } from "./gallery.controller";
import { GalleryService } from "./gallery.service";

@Module({
    imports:[SequelizeModule.forFeature([gallery])],
    controllers:[GalleryController],
    providers:[GalleryService]
})
export class GalleryModule{}