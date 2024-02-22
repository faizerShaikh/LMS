import { Injectable } from "@nestjs/common";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Enquiry } from "./enquiry.model";
import { EnquiryDto, UpdateEnquiryDTO } from "./dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class EnquiryService extends GenericService<Enquiry,EnquiryDto,UpdateEnquiryDTO>({}) {
    constructor(@InjectModel(Enquiry)private enquiry: typeof Enquiry, private reqParams: RequestParamsService){super(enquiry,reqParams)}

}