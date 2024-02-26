import { PartialType } from "@nestjs/mapped-types";
import { Contacts } from "../contact.model";

export class UpdateContactsDTo extends PartialType(Contacts){

}