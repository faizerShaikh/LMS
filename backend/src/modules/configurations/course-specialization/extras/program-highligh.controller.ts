import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
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

  @Post('course-specialization/:courseSpecializationId')
  async createProgramHighlight(
    @Param('courseSpecializationId') courseSpecializationId: string,
    @Body() otherData: any,
  ) {
    try {
      const programHighlight =
        await this.programHighlightService.createProgramHighlight(
          courseSpecializationId,
          otherData,
        );

      return programHighlight;
    } catch (error) {
      console.error('Error creating program highlight:', error);
      throw new InternalServerErrorException(
        'Error creating program highlight',
      );
    }
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

  @Get('course-specialization/:courseSpecializationId')
  async getProgramHighlightsByCourseSpecializationId(
    @Param('courseSpecializationId') courseSpecializationId: string,
  ): Promise<ProgramHighlight[]> {
    const programHighlights =
      await this.programHighlightService.findProgramHighlightsByCourseSpecializationId(
        courseSpecializationId,
      );
    if (!programHighlights) {
      throw new NotFoundException(
        `Program highlights not found for course specialization ID ${courseSpecializationId}`,
      );
    }
    return programHighlights;
  }
}
