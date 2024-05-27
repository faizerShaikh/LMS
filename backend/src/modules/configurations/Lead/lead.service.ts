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
import { Op } from 'sequelize';
import { User } from 'src/modules/user/users/models/user.model';

@Injectable()
export class LeadService extends GenericService<
  Leads,
  CreateLeadDto,
  UpdateLeadDto
>({
  defaultFindOptions: {
    include: [ApplicationForm, User],
  },
  includes: [ApplicationForm, User],
}) {
  constructor(
    @InjectModel(Leads) private lead: typeof Leads,
    private reqParams: RequestParamsService,
  ) {
    super(lead, reqParams);
  }

  async findByApplicationId(id: string) {
    return await this.lead.findOne({
      where: { [Op.or]: [{ applicationId: id }, { id: id }] },
    });
  }

  async update<Model extends {} = any>(
    data: UpdateLeadDto,
    id: string,
  ): Promise<Model> {
    const lead = await this.findByApplicationId(id);
    return await super.update(data, lead.id);
  }

  async getAllLead() {
    const lead = await this.lead.findAll({
      include: [
        {
          model: ApplicationForm,
          include: [University, Course, CourseSpecialization],
        },
        User,
      ],
    });
    return {
      count: lead.length,
      rows: lead,
    };
  }
}
