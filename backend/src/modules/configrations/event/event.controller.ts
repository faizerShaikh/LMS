import { Controller, Param,Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GenericController } from "src/core/modules";
import { Events } from "./event.model";
import { CreateEventDTO, UpdateEventDTO } from "./dtos";
import { eventService } from "./event.service";
import { MulterIntercepter } from "src/core/interceptors";
import { MulterEnum } from "src/core/interfaces";

@Controller('configurations/event')
export class eventController extends GenericController<Events,CreateEventDTO,UpdateEventDTO>({
    createObjDTO:CreateEventDTO,
    updateObjDTO: UpdateEventDTO
}){
    constructor(private readonly eventService: eventService){
        super(eventService);
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
}

