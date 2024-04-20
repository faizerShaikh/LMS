import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { join } from 'path';
import { unlink } from 'fs';
import * as fs from 'fs';
import { ProgramHighlightDTO } from '../dtos/program-highlights.dto';
import { ProgramHighlight } from '../model/program-highlights.model';

@Injectable()
export class ProgramHighlightService extends GenericService<
  ProgramHighlight,
  ProgramHighlightDTO,
  ProgramHighlightDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(ProgramHighlight)
    private programHighlight: typeof ProgramHighlight,

    private reqParams: RequestParamsService,
  ) {
    super(programHighlight, reqParams);
  }

  async updateprogramHighlightImage(file: Express.Multer.File, id: string) {
    if (file) {
      const programHighlight = await this.getOne<ProgramHighlight>(id);
      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        '/src/public/' + programHighlight.image,
      );

      if (fs.existsSync(filePath)) {
        unlink(filePath, (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        });
      }

      await programHighlight.update({
        image: '/media/programHighlights/' + file.filename,
      });
      return 'Admission Process Image Uploaded Successfully';
    }
  }

  async createProgramHighlight(courseSpecializationId: string, otherData: any) {
    try {
      console.log(
        'Creating program highlight for course specialization ID:',
        courseSpecializationId,
      );

      // Here you can create your program structure based on the provided data
      const programHighlight = await this.programHighlight.create({
        ...otherData,
        course_specialization_id: courseSpecializationId,
      });

      console.log('Program highlight created:', programHighlight);

      return programHighlight;
    } catch (error) {
      console.error('Error creating program highlight:', error);
      throw new InternalServerErrorException(
        'Error creating program highlight',
      );
    }
  }

  async findProgramHighlightsByCourseSpecializationId(
    courseSpecializationId: string,
  ) {
    try {
      console.log(
        'Fetching program highlights for course specialization ID:',
        courseSpecializationId,
      );
      const programHighlights = await this.programHighlight.findAll({
        where: { course_specialization_id: courseSpecializationId },
      });
      console.log('Found program highlights:', programHighlights);
      if (!programHighlights || programHighlights.length === 0) {
        console.log('No program highlights found');
        throw new NotFoundException(
          'Program highlights not found for the given course specialization ID',
        );
      }
      return programHighlights;
    } catch (error) {
      console.error('Error fetching program highlights:', error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
