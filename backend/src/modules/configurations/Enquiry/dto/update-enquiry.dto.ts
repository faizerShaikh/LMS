import { PartialType } from "@nestjs/mapped-types";
import { Enquiry } from "../enquiry.model";

export class UpdateEnquiryDTO extends PartialType(Enquiry){
    
}