import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Leads } from './lead.model';
import { CreateLeadDto, UpdateLeadDto } from './dto';

@Injectable()
export class LeadService extends GenericService<Leads, CreateLeadDto, UpdateLeadDto>({
}) {
  constructor(
    @InjectModel(Leads) private lead: typeof Leads,
    private reqParams: RequestParamsService,
  ) {
    super(lead, reqParams);
  }
}
