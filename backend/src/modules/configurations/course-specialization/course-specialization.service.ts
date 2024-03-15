import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CourseSpecialization } from './model';
import {
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO,
} from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { FeesStructure } from './model/fees-structure.model';
import { ProgramStructure } from './model/program-structure.model';
import { Course } from '../course/model';
import { University } from '../university/model';
import { MetaData } from '../metaData/meta.model';
import * as fs from 'fs'
import { AdmissionProcessCards } from './model/admissionProcess.model';
@Injectable()
export class CourseSpecializationService extends GenericService<
  CourseSpecialization,
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO
>({
  
  defaultFindOptions:{
    include:[MetaData,Course,University,AdmissionProcessCards]
},
includes:[MetaData,Course,University,AdmissionProcessCards]

}) {
  constructor(
    @InjectModel(CourseSpecialization)
    private courseSpecialization: typeof CourseSpecialization,
    @InjectModel(FeesStructure)
    private feesStructure: typeof FeesStructure,
    @InjectModel(ProgramStructure)
    private programStructure: typeof ProgramStructure,
    @InjectModel(AdmissionProcessCards)
    private admissionProcess: typeof AdmissionProcessCards,

    private reqParams: RequestParamsService,


  ) {
    super(courseSpecialization, reqParams);
  }

  async create<CourseSpecialization>(
    dto: CreateCourseSpecializationDTO,
  ): Promise<CourseSpecialization> {
    const courseSpecialization = await super.create(dto);
    await this.createOtherObjects(dto, courseSpecialization, true);
    return courseSpecialization;
  }

  async update<CourseSpecialization>(
    data: UpdateCourseSpecializationDTO,
    id: string,
  ): Promise<CourseSpecialization> {
    try {
      const courseSpecialization = await super.update(data, id);
      await this.createOtherObjects(data, courseSpecialization, false);
      return courseSpecialization;
    } catch (err) {
      console.error('Error occurred in update method:', err);
    }
  }
  async updateCourseSpecializationImage(file: Express.Multer.File, id: string) {
    const courseSpecialization = await this.getOne<CourseSpecialization>(id);
    const defaultImagePath='backend/src/public/media/default.png'; 
    const filePath= join(
      __dirname,
      '../../../../',
      'src/public/media' + courseSpecialization.cover_image,
    )
    if(!defaultImagePath)
    if (fs.existsSync(filePath)) {
      unlink(filePath
        ,
        (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        },
      );
    }

    await courseSpecialization.update({
      cover_image: file?.path?.split('src/public')[1],
    });
    return 'Course Specialization Cover Image Uploaded Successfully';
  }

  async createOtherObjects(
    dto: CreateCourseSpecializationDTO | UpdateCourseSpecializationDTO,
    courseSpecialization: CourseSpecialization,
    isNewRecord: boolean,
  ) {
    if (!courseSpecialization.isNewRecord) {
      await this.programStructure.destroy({
        where: {
          course_specialization_id: courseSpecialization.id,
        },
      });
      await this.admissionProcess.destroy({
        where:{
          course_specialization_id:courseSpecialization.id
        }
      })
    }
    if (isNewRecord) {
            await this.feesStructure.create({
        ...dto.fees_structure,
        course_specialization_id: courseSpecialization.id,
      });
    } else {
      if (dto.fees_structure) {
        await this.feesStructure.update<FeesStructure>(
          { ...dto.fees_structure },
          {
            where: {
              course_specialization_id: courseSpecialization.id,
            },
          },
        );
      }
    }

    await this.admissionProcess.bulkCreate(
      dto.admissionProcess.map((item)=>({
        ...item,
        courseSpecialization:courseSpecialization
      }))
    )
    await this.programStructure.bulkCreate(
      dto.program_structures.map((item) => ({
        ...item,
        course_specialization_id: courseSpecialization.id,
      })),
    );
  }
}
