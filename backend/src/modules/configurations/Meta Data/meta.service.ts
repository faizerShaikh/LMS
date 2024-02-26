import { Injectable } from "@nestjs/common";
import { GenericService, RequestParamsService } from "src/core/modules";
import { MetaData } from "./meta.model";
import { MetaDataDto, UpdateMetaDataDTO } from "./dto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class MetaDataService extends GenericService<MetaData,MetaDataDto,UpdateMetaDataDTO>({}){
    constructor(@InjectModel(MetaData)private metaData:typeof MetaData,private reqParams:RequestParamsService){super(metaData,reqParams)}
}