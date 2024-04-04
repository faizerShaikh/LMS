import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { GenericController } from 'src/core/modules';

import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';
import { AdmissionProcessCards } from '../model/admissionProcess.model';
import { CreateAdmissionProcessCardsDTO } from '../dtos';
import { AdmissionProcessService } from './admissionProcess.service';

@Controller('configurations/admission-process')
export class AdmissionProcessController extends GenericController<
  AdmissionProcessCards,
  CreateAdmissionProcessCardsDTO,
  CreateAdmissionProcessCardsDTO
>({
  createObjDTO: CreateAdmissionProcessCardsDTO,
  updateObjDTO: CreateAdmissionProcessCardsDTO,
}) {
  constructor(private readonly admissionProcessService: AdmissionProcessService) {
    super(admissionProcessService);
  }

  @Put('update-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'image',
      path: '/media/admissionProcess',
    }),
  )
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.admissionProcessService.updateAdmissionProcessImage(file, id);
  }

}
