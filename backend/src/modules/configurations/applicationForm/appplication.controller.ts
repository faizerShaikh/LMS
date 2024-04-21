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
   @Get('export/:applicationId')
  async exportToExcel(@Param('applicationId') applicationId: string) {
    try {
      // Fetch application form details by ID
      const applicationForm = await this.applicationFormService.findById(applicationId);

      // If application form is not found, throw NotFoundException
      if (!applicationForm) {
        throw new NotFoundException('Application form not found');
      }

      // Construct filename using application ID
      const filename = `application_${applicationId}`;

      // Export application form data to Excel
      const filePath = await this.applicationFormService.exportToExcel(applicationForm, filename);

      // Return file path
      return { filePath };
    } catch (error) {
      console.error('Error exporting Excel file:', error);
      throw error;
    }
  }
}
