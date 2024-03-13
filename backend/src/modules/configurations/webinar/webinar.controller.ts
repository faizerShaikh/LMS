import {
  Controller,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';
import { WebinarService } from './webinar.service';
import { UpdateWebinarDto } from './dto/update-webinar.dto';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { Webinar } from './webinar.model';

@Controller('configurations/webinar')
export class WebinarController extends GenericController<
  Webinar,
  CreateWebinarDto,
  UpdateWebinarDto
>({
  createObjDTO: CreateWebinarDto,
  updateObjDTO: UpdateWebinarDto,
}) {
  constructor(private readonly webinarService: WebinarService) {
    super(webinarService);
  }

  @Put('webinar-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'coverImage',
      path: '/media/webinar/',
    }),
  )
  updateWebinarImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    console.log(file);

    return this.webinarService.updateWebinarImage(file, id);
  }
}
