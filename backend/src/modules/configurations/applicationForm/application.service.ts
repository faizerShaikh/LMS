// application.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { ApplicationFormDTO } from "./dto/create-application.dto";

@Injectable()
export class ApplicationService extends GenericService({}) {
  constructor(
    @InjectModel(ApplicationFormDTO) private applicationModel: typeof ApplicationFormDTO,
    private reqParams: RequestParamsService
  ) {
    super(applicationModel, reqParams);
  }
}
