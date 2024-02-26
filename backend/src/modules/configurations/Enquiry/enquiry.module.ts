import { Module } from "@nestjs/common";
import { Enquiry } from "./enquiry.model";
import { EnquiryController } from "./enquiry.controller";
import { EnquiryService } from "./enquiry.service";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports:[SequelizeModule.forFeature([Enquiry])],
    controllers:[EnquiryController],
    providers:[EnquiryService]
})
export class EnquiryModule{}