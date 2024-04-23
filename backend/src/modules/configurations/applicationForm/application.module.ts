// application.module.ts
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ApplicationService } from "./application.service";
import { ApplicationForm } from "./application.model";
import { ApplicationController } from "./appplication.controller";
import { MailModule } from "../Enquiry/mail/mail.module";

@Module({
  imports: [SequelizeModule.forFeature([ApplicationForm]),MailModule],
  controllers: [ApplicationController],
  providers: [ApplicationService]
})
export class ApplicationModule {}
