import { Controller } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { MetaData } from "./meta.model";
import { MetaDataDto, UpdateMetaDataDTO } from "./dto";

@Controller('configrations/meta-data')
export class MetaDataController extends GenericController<MetaData,MetaDataDto,UpdateMetaDataDTO>({createObjDTO:MetaDataDto,updateObjDTO:UpdateMetaDataDTO}){

}