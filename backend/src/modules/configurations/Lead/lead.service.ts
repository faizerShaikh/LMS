import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { Leads } from './lead.model';
import { CreateLeadDto, UpdateLeadDto } from './dto';
import { ApplicationForm } from '../applicationForm/application.model';
import { University } from '../university/model';
import { Course } from '../course/model';
import { CourseSpecialization } from '../course-specialization/model';
import { count } from 'console';

@Injectable()
export class LeadService extends GenericService<Leads, CreateLeadDto, UpdateLeadDto>({
  defaultFindOptions:{
    include:[ApplicationForm]
  },
  includes:[ApplicationForm]
}) {
  constructor(
    @InjectModel(Leads) private lead: typeof Leads,
    private reqParams: RequestParamsService,
  ) {
    super(lead, reqParams);
  }

  async getAllLead(){
    const lead = await this.lead.findAll({
      include : [{
        model : ApplicationForm,
        include : [University,Course,CourseSpecialization]
      }]
    })
    return {
      count : lead.length,
      rows : lead
    }
  }
}
