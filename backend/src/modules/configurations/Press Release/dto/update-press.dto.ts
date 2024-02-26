import { PartialType } from "@nestjs/mapped-types";
import { PressDTO } from "./create-press.dto";

export class UpdatePressDTO extends PartialType(PressDTO){}