import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { AdmissionProcessCards } from '../model/admissionProcess.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdmissionProcessCardsDTO } from '../dtos';
import { join } from 'path';
import { unlink } from 'fs';
import * as fs from 'fs';

@Injectable()
export class AdmissionProcessService extends GenericService<
  AdmissionProcessCards,
  CreateAdmissionProcessCardsDTO,
  CreateAdmissionProcessCardsDTO
>({
  defaultFindOptions: {
    include: [],
  },
  includes: [],
}) {
  constructor(
    @InjectModel(AdmissionProcessCards)
    private admissionProcess: typeof AdmissionProcessCards,

    private reqParams: RequestParamsService,
  ) {
    super(admissionProcess, reqParams);
  }
  async createAdmissionProcess(courseSpecializationId: string, dto: CreateAdmissionProcessCardsDTO) {
    try {
      console.log('Creating admission process for course specialization ID:', courseSpecializationId);

      // Create the admission process with the provided data and course specialization ID
      const admissionProcess = await this.admissionProcess.create({
        ...dto,
        course_specialization_id: courseSpecializationId,
      });

      console.log('Admission process created:', admissionProcess);

      return admissionProcess;
    } catch (error) {
      console.error('Error creating admission process:', error);
      throw new InternalServerErrorException('Error creating admission process');
    }
  }

  async getAdmissionProcessByCourseSpecializationId(courseSpecializationId: string) {
    try {
      console.log('Fetching admission processes for course specialization ID:', courseSpecializationId);
      const admissionProcesses = await this.admissionProcess.findAll({
        where: { course_specialization_id: courseSpecializationId },
      });
      console.log('Found admission processes:', admissionProcesses);
      if (!admissionProcesses || admissionProcesses.length === 0) {
        console.log('No admission processes found');
        throw new NotFoundException('Admission processes not found for the given course specialization ID');
      }
      return admissionProcesses;
    } catch (error) {
      console.error('Error fetching admission processes:', error);
      throw new InternalServerErrorException('Error fetching admission processes');
    }
  }


  async updateAdmissionProcessImage(file: Express.Multer.File, id: string) {
    if (file) {
      const admissionProcess = await this.getOne<AdmissionProcessCards>(id);
      const defaultImagePath = 'backend/src/public/media/default.png';
      const filePath = join(
        __dirname,
        '../../../../',
        '/src/public/' + admissionProcess.image,
      );

      if (fs.existsSync(filePath)) {
        unlink(filePath, (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        });
      }

    await admissionProcess.update({
        image: '/media/course-specialization/extras/' + file.filename,
    });
    return 'Admission Process Image Uploaded Successfully';
  }
}
}