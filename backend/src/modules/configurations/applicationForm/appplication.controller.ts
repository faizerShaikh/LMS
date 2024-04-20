// application.controller.ts
import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { ApplicationService } from "./application.service";
import { ApplicationForm } from "./application.model";
import { ApplicationFormDTO } from "./dto/create-application.dto";
import { UpdateApplicationDto } from "./dto/update-application.dto";

@Controller('configurations/application-form')
export class ApplicationController extends GenericController<ApplicationForm, ApplicationFormDTO, UpdateApplicationDto>({
  createObjDTO: ApplicationFormDTO,
  updateObjDTO: UpdateApplicationDto
}) {
  constructor(private readonly applicationService: ApplicationService) {
    super(applicationService);
  }
}
