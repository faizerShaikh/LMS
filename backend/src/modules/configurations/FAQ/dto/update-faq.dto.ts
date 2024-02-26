import { PartialType } from "@nestjs/mapped-types";
import { CreateFaqDTO } from "./create-faq.dto";

export class UpdateFAQ extends PartialType(CreateFaqDTO){

}