import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';
import { join } from 'path';
import { unlink } from 'fs';
import * as fs from 'fs';
import { ProgramStructureDTO } from '../dtos/program-structure.dto';
import { ProgramStructure } from '../model/program-structure.model';

@Injectable()
export class ProgramStructureService extends GenericService<
  ProgramStructure,
  ProgramStructureDTO,
  ProgramStructureDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(ProgramStructure)
    private programStructureModel: typeof ProgramStructure,

    private reqParams: RequestParamsService,
  ) {
    super(programStructureModel, reqParams);
  }

  async updateProgramStructureImage(file: Express.Multer.File, id: string) {
    const programStructure = await this.getOne<ProgramStructure>(id);
    const defaultImagePath = 'backend/src/public/media/default.png';
    const filePath = join(
      __dirname,
      '../../../../',
      '/src/public/' + programStructure.image,
    );

    if (fs.existsSync(filePath)) {
      unlink(filePath, (err) => {
        if (err) {
          throw new InternalServerErrorException(err);
        }
        console.log('file deleted...');
      });
    }

    await programStructure.update({
      image: '/media/course-specialization/extras/' + file.filename,
    });
    return 'Program Structure Image Uploaded Successfully';
  }
}
