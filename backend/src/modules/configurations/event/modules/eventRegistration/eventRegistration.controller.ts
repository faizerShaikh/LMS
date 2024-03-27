import { Controller, Get, Param } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { EventRegistration } from './eventRegistration.model';
import { EventRegistrationService } from './eventRegistration.service';
import { EventRegistrationdto } from './dto/create-eventRegistration.dto';
import { UpdateEventRegistrationDto } from './dto/update-eventRegiter.dto';

@Controller('configurations/event-webinar/registration')
export class EventRegistrationController extends GenericController<
  EventRegistration,
  EventRegistrationdto,
  UpdateEventRegistrationDto
>({
  createObjDTO: EventRegistrationdto,
  updateObjDTO: UpdateEventRegistrationDto,
}) {
  constructor(
    private readonly eventregistrationService: EventRegistrationService,
  ) {
    super(eventregistrationService);
  }

  @Get('by-event/:eventId')
  getByEvent(@Param('eventId') eventId: string) {
    return this.eventregistrationService.getByEvent(eventId);
  }
}
