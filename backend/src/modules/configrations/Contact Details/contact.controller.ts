import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { Contacts } from "./contact.model";
import { ContactsDto, UpdateContactsDTo } from "./dto";
import { ContactService } from "./contact.service";

@Controller('configrations/contacts')
export class ContactController extends GenericController<Contacts,ContactsDto,UpdateContactsDTo>({createObjDTO:ContactsDto,updateObjDTO:UpdateContactsDTo}){
    constructor(private readonly contactService:ContactService){super(contactService)}
}