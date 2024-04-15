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

  async createProgramStructure( courseSpecializationId: string,programStructureDTO: any) {
    try {
      console.log('Creating program structure for course specialization ID:', courseSpecializationId);
      
      // Here you can create your program structure based on the provided data
      const programStructure = await this.programStructureModel.create({
        ...programStructureDTO, course_specialization_id: courseSpecializationId,
      });
  
      console.log('Program structure created:', programStructure);
  
      return programStructure;
    } catch (error) {
      console.error('Error creating program Structure:', error);
      throw new InternalServerErrorException('Error creating program Structure');
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
