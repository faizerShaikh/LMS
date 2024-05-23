import { Controller} from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { CreateLeadDto, UpdateLeadDto } from "./dto";
import { Leads } from "./lead.model";
import { LeadService } from "./lead.service";

@Controller('configurations/leads')
export class LeadController extends GenericController<Leads,CreateLeadDto,UpdateLeadDto>({
    createObjDTO: CreateLeadDto,
    updateObjDTO: UpdateLeadDto
}){
    constructor(private readonly leadService: LeadService){
        super(leadService);
    }
}