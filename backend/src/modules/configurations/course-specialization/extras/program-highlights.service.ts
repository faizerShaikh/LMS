import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
    }
    return 'Admission Process Image Uploaded Successfully';
  }
}
