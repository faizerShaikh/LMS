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
