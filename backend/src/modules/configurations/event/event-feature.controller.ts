import {
  Controller,
  Get,
  Param,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { EventFeature } from './event.model';
import { CreateEventFeatureDTO, UpdateEventFeatureDTO } from './dtos';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';
import { EventFeatureService } from './event-feature.service';

@Controller('configurations/event/event-feature')
export class EventFeatureController extends GenericController<
  EventFeature,
  CreateEventFeatureDTO,
  UpdateEventFeatureDTO
>({
  createObjDTO: CreateEventFeatureDTO,
  updateObjDTO: UpdateEventFeatureDTO,
}) {
  constructor(private readonly eventFeatureService: EventFeatureService) {
    super(eventFeatureService);
  }

  @Get('/by-event/:eventId')
  async getEventfeatures(
    @Query('type') type: string,
    @Param('eventId') eventId: string,
  ): Promise<EventFeature[]> {
    return this.eventFeatureService.getEventfeatures(eventId, type);
  }

  @Put('event-feature-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'image',
      path: '/media/event/event-feature-image',
    }),
  )
  updateEventFeatureImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.eventFeatureService.updateEventFeatureImage(file, id);
  }
}
