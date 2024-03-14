import { Controller, Param, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { WebinarService } from './webinar.service';
import { UpdateWebinarDto } from './dto/update-webinar.dto';
import { CreateWebinarDto } from './dto/create-webinar.dto';
import { Webinar } from './webinar.model';
import { MulterEnum } from 'src/core/interfaces';
import { MulterIntercepter } from 'src/core/interceptors';

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

  @Put('update-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.any,
      fieldName: 'university_image',
      path: '/media/webinar/speaker/',
    })
  )
  async  updateSpeakersImage(@Param('id') id: string , @UploadedFiles() file: Express.Multer.File[]){
      const result= await this.webinarService.updateSpeakersImage(file,id)
  }
}
