import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { EventRegistration } from './eventRegistration.model';
import { EventRegistrationdto } from './dto/create-eventRegistration.dto';
import { UpdateEventRegistrationDto } from './dto/update-eventRegiter.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class EventRegistrationService extends GenericService<
  EventRegistration,
  EventRegistrationdto,
  UpdateEventRegistrationDto
>({ defaultFindOptions: {} }) {
  constructor(
    @InjectModel(EventRegistration)
    private eventregistration: typeof EventRegistration,
    private reqparams: RequestParamsService,
  ) {
    super(eventregistration,reqparams);
  }
}
