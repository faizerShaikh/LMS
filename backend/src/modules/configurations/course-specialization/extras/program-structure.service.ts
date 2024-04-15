import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

  async createProgramStructure(courseSpecializationId: string, data: ProgramStructureDTO) {
    try {
      console.log('========================================>',data)
      const programStructureData = { ...data, course_specialization_id: courseSpecializationId };
      console.log('=============================================>>>>>>>',programStructureData)
      const programStructure = await ProgramStructure.create(programStructureData);
      return programStructure;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }


  async getProgramStructuresByCourseSpecializationId(courseSpecializationId: string) {
    try {
      console.log('Fetching program structures for course specialization ID:', courseSpecializationId);
      const programStructures = await ProgramStructure.findAll({
        where: { course_specialization_id: courseSpecializationId },
      });
      console.log('Found program structures:', programStructures);
      if (!programStructures) {
        console.log('No program structures found');
        throw new NotFoundException('Program structures not found for the given course specialization ID');
      }
      return programStructures;
    } catch (error) {
      console.error('Error fetching program structures:', error);
      throw new InternalServerErrorException(error.message);
    }
  }
  
}
