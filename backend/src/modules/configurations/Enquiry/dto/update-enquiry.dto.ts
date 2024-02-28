import { PartialType } from "@nestjs/mapped-types";
import { Enquiry } from "../enquiry.model";
import { EnquiryDto } from "./create-enquiry.dto";

export class UpdateEnquiryDTO extends PartialType(EnquiryDto){
}