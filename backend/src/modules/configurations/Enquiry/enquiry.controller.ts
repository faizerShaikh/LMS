import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { Enquiry } from "./enquiry.model";
import { EnquiryDto, UpdateEnquiryDTO } from "./dto";
import { EnquiryService } from "./enquiry.service";

@Controller('configurations/enquiry')
export class EnquiryController extends GenericController<Enquiry,EnquiryDto,UpdateEnquiryDTO>({
    createObjDTO:EnquiryDto,
    updateObjDTO:UpdateEnquiryDTO,
    // notAllowedMethods:[4]
}){
    constructor(private readonly EnquiryService : EnquiryService){
        super(EnquiryService)
    }
}