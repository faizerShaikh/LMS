// application.controller.ts
import { Controller, Get, NotFoundException } from "@nestjs/common";
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
   @Get('export')
  async exportToExcel() {
    try {
      // Fetch application form details by ID
      const applicationForm = await this.applicationService.getAll();

      if (!applicationForm) {
        throw new NotFoundException('Application form not found');
      }

      const filename = `application_Forms`;

      const filePath = await this.applicationService.exportToExcel(applicationForm, filename);

      return { filePath };
    } catch (error) {
      console.error('Error exporting Excel file:', error);
      throw error;
    }
  }
}
