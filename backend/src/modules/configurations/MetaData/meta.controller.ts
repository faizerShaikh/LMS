import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { MetaData } from "./meta.model";
import { MetaDataDto, UpdateMetaDataDTO } from "./dto";
import { MetaDataService } from "./meta.service";

@Controller('configurations/meta-data')
export class MetaDataController extends GenericController<MetaData,MetaDataDto,UpdateMetaDataDTO>({createObjDTO:MetaDataDto,updateObjDTO:UpdateMetaDataDTO}){
    constructor(private readonly metaService : MetaDataService){super(metaService)}
}