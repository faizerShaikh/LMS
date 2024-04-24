import { Controller, Get } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Enquiry } from './enquiry.model';
import { EnquiryDto, UpdateEnquiryDTO } from './dto';
import { EnquiryService } from './enquiry.service';

@Controller('configurations/enquiry')
export class EnquiryController extends GenericController<
  Enquiry,
  EnquiryDto,
  UpdateEnquiryDTO
>({
  createObjDTO: EnquiryDto,
  updateObjDTO: UpdateEnquiryDTO,
  // notAllowedMethods:[4]
}) {
  constructor(private readonly EnquiryService: EnquiryService) {
    super(EnquiryService);
  }

  @Get('export-enquiry')
  async exportToExcel() {
    const enquiry = await this.EnquiryService.getAll();
    const filename = `enquiries-details`;
    const filePath = await this.EnquiryService.exportToExcel(enquiry, filename);
    return { filePath };
  }
}
