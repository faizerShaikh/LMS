import {
    Body,
    Controller,
    Param,
    Put,
    UploadedFile,
    UseInterceptors,
    Post,
    Get,
  } from '@nestjs/common';
  import { GenericController } from 'src/core/modules';
  import { MulterIntercepter } from 'src/core/interceptors';
  import { MulterEnum } from 'src/core/interfaces';
  import { Infos } from '../model/info.model';
  import { InfoDTO } from '../dtos/info.dto';
  import { InfoService } from './info.service';
  
  @Controller('configurations/infos')
  export class InfoController extends GenericController<
    Infos,
    InfoDTO,
    InfoDTO
  >({
    createObjDTO: InfoDTO,
    updateObjDTO: InfoDTO,
  }) {
    constructor(
      private readonly infoService: InfoService,
    ) {
      super(infoService);
    }
  
    @Post('course-specialization/:id')
    async createInfoForCourseSpecialization(
      @Param('id') courseSpecializationId: string,
      @Body() infoDTO: any,
    ) {
      return this.infoService.createInfoForCourseSpecialization(courseSpecializationId, infoDTO);
    }
  
    @Get('course-specialization/:id')
    async getInfoByCourseSpecializationId(
      @Param('id') courseSpecializationId: string,
    ): Promise<Infos[]> {
      return this.infoService.getInfoByCourseSpecializationId(courseSpecializationId);
    }
  
    @Put('update-image/:id')
    @UseInterceptors(
      MulterIntercepter({
        type: MulterEnum.single,
        fieldName: 'image',
        path: '/media/infos',
      }),
    )
    updateImage(
      @UploadedFile() file: Express.Multer.File,
      @Param('id') id: string,
    ) {
      return this.infoService.updateInfoImage(file, id);
    }
  
    // Add any additional endpoints you need here
  
  }
  