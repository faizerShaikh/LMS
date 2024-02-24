import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Contacts } from "./contact.model";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";

@Module({
    imports:[SequelizeModule.forFeature([Contacts])],
    controllers:[ContactController],
    providers:[ContactService]
})
export class ContactModule{}