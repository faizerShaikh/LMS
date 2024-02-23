import { Controller} from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { CreateFaqDTO, UpdateFAQ } from "./dto";
import { Faq } from "./faq.model";
import { FaqService } from "./faq.service";

@Controller('configrations/faq')
export class FaqController extends GenericController<Faq,CreateFaqDTO,UpdateFAQ>({
    createObjDTO: CreateFaqDTO,
    updateObjDTO: UpdateFAQ
}){
    constructor(private readonly FaqService: FaqService){
        super(FaqService);
    }
}