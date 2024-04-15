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
import { AssociationService } from './association.service';
import { Associations } from '../model/associations.model';
import { AssociationsDTO } from '../dtos/associations.dto';

@Controller('configurations/associations')
export class AssociationController extends GenericController<
  Associations,
  AssociationsDTO,
  AssociationsDTO
>({
  createObjDTO: AssociationsDTO,
  updateObjDTO: AssociationsDTO,
}) {
  constructor(private readonly associationService: AssociationService) {
    super(associationService);
  }

  @Post('course-specialization/:courseSpecializationId')
  async createAssociation(
    @Param('courseSpecializationId') courseSpecializationId: string,
    @Body() otherData: any,
  ) {
    try {
      const association = await this.associationService.createAssociation(courseSpecializationId, otherData);
      return association;
    } catch (error) {
      console.error('Error creating association:', error);
      throw new InternalServerErrorException('Error creating association');
    }
  }

  @Get('course-specialization/:courseSpecializationId')
  async getAssociationsByCourseSpecializationId(
    @Param('courseSpecializationId') courseSpecializationId: string,
  ) {
    try {
      const associations = await this.associationService.getAssociationsByCourseSpecializationId(courseSpecializationId);
      return associations;
    } catch (error) {
      console.error('Error fetching associations:', error);
      throw new InternalServerErrorException('Error fetching associations');
    }
  }

  @Put('update-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'image',
      path: '/media/associations',
    }),
  )
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.associationService.updateAssociationImage(file, id);
  }
}
