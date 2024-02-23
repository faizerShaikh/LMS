import { PartialType } from "@nestjs/mapped-types";
import { MetaDataDto } from "./create-meta.dto";
import { MetaDataService } from "../meta.service";

export class UpdateMetaDataDTO extends PartialType(MetaDataDto){
    constructor(private readonly metaService:MetaDataService){super(metaService)}
}