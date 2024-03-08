import { PartialType } from "@nestjs/mapped-types";
import { EventRegistrationdto } from "./create-eventRegistration.dto";

export class UpdateEventRegistrationDto extends PartialType(EventRegistrationdto){ }