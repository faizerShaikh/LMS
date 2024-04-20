// application.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GenericService, RequestParamsService } from "src/core/modules";
import { ApplicationForm } from "./application.model";

@Injectable()
export class ApplicationService extends GenericService({}) {
  constructor(
    @InjectModel(ApplicationForm) private applicationModel: typeof ApplicationForm,
    private reqParams: RequestParamsService
  ) {
    super(applicationModel, reqParams);
  }
}
