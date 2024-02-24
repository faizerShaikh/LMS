import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { Contacts } from "./contact.model";

@Injectable()
export class ContactService extends GenericService({}){
    constructor(@InjectModel(Contacts)private contacts:typeof Contacts, private reqParams:RequestParamsService){super(contacts,reqParams)}
}