import { PartialType } from "@nestjs/mapped-types";
import { GlobalPartnerDTO } from "./create-global-partner.dto";

export class UpdateGlobalPartnerDTO extends PartialType(GlobalPartnerDTO){}