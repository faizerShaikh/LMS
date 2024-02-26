import { PartialType } from "@nestjs/mapped-types";
import { CreatePageDto } from "./create-pageContent.dto";

export class UpdatePageContent extends PartialType(CreatePageDto){
    

}