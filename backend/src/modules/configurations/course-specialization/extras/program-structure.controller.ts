import { Body, Controller, Param, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GenericController } from 'src/core/modules';
import { MulterIntercepter } from 'src/core/interceptors';
import { MulterEnum } from 'src/core/interfaces';
import { ProgramStructure } from '../model/program-structure.model';
import { ProgramStructureDTO } from '../dtos/program-structure.dto';
import { ProgramStructureService } from './program-structure.service';

@Controller('configurations/program-structures')
export class ProgramStructureController extends GenericController<
  ProgramStructure,
  ProgramStructureDTO,
  ProgramStructureDTO
>({
  createObjDTO: ProgramStructureDTO,
  updateObjDTO: ProgramStructureDTO,
}) {
  constructor(private readonly programStructureService: ProgramStructureService) {
    super(programStructureService);
  }

  @Put('update-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'image',
      path: '/media/programStructures',
    }),
  )
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.programStructureService.updateProgramStructureImage(file, id);
  }
}