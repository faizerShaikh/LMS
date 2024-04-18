import {
  Controller,
  Get,
  Param,
  Put,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { Events } from './event.model';
import { CreateEventDTO, UpdateEventDTO } from './dtos';
import { EventService } from './event.service';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';

@Controller('configurations/event')
export class EventController extends GenericController<
  Events,
  CreateEventDTO,
  UpdateEventDTO
>({
  createObjDTO: CreateEventDTO,
  updateObjDTO: UpdateEventDTO,
}) {
  constructor(private readonly eventService: EventService) {
    super(eventService);
  }

  @Get('/listing')
  async eventListing(@Query() query: any): Promise<Events[]> {
    return this.eventService.eventListing(query);
  }

  @Put('event-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'eventImage',
      path: '/media/event',
    }),
  )
  updateEventImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.eventService.updateEventImage(file, id);
  }

  @Put('update-syllabus/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'syllabus',
      path: '/documents',
    }),
  )
  updateSyllabus(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ){
    return this.eventService.updateSyllabus(file,id)
  }

  @Put('strategic-partner/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.multiple,
      fieldName: 'stratigicPartners',
      path: '/media/event/strategic-partner',
    }),
  )
  updateStratigicPartners(
    @UploadedFiles() file: Express.Multer.File[],
    @Param('id') id: string,
  ) {
    return this.eventService.updateStratigicPartners(file, id);
  }
}
