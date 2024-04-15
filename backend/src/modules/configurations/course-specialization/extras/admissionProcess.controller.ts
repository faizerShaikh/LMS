import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
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
  constructor(
    private readonly admissionProcessService: AdmissionProcessService,
  ) {
    super(admissionProcessService);
  }

  @Post('course-specialization/:courseSpecializationId')
  async createAdmissionProcess(
    @Param('courseSpecializationId') courseSpecializationId: string,
    @Body() dto: CreateAdmissionProcessCardsDTO,
  ) {
    try {
      const admissionProcess = await this.admissionProcessService.createAdmissionProcess(courseSpecializationId, dto);
      return admissionProcess;
    } catch (error) {
      console.error('Error creating admission process:', error);
      throw new InternalServerErrorException('Error creating admission process');
    }
  }

  @Get('course-specialization/:courseSpecializationId')
  async getAdmissionProcessByCourseSpecializationId(
    @Param('courseSpecializationId') courseSpecializationId: string,
  ) {
    try {
      const admissionProcesses = await this.admissionProcessService.getAdmissionProcessByCourseSpecializationId(courseSpecializationId);
      return admissionProcesses;
    } catch (error) {
      console.error('Error fetching admission processes:', error);
      throw new InternalServerErrorException('Error fetching admission processes');
    }
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
