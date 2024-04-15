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
import { ProgramHighlight } from '../model/program-highlights.model';
import { ProgramHighlightDTO } from '../dtos/program-highlights.dto';
import { ProgramHighlightService } from './program-highlights.service';

@Controller('configurations/program-highlights')
export class ProgramHighlightController extends GenericController<
  ProgramHighlight,
  ProgramHighlightDTO,
  ProgramHighlightDTO
>({
  createObjDTO: ProgramHighlightDTO,
  updateObjDTO: ProgramHighlightDTO,
}) {
  constructor(
    private readonly programHighlightService: ProgramHighlightService,
  ) {
    super(programHighlightService);
  }

  @Put('update-image/:id')
  @UseInterceptors(
    MulterIntercepter({
      type: MulterEnum.single,
      fieldName: 'image',
      path: '/media/programHighlights',
    }),
  )
  updateImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return this.programHighlightService.updateprogramHighlightImage(file, id);
  }
}
