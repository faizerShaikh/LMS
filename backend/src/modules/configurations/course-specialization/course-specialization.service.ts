import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { CourseSpecialization } from './model';
import {
  CreateAdmissionProcessCardsDTO,
  CreateCourseSpecializationDTO,
  FeesStructureDTO,
  ProgramStructureDTO,
  UpdateCourseSpecializationDTO,
} from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { unlink } from 'fs';
import { join } from 'path';
import { FeesStructure } from './model/fees-structure.model';
import { ProgramStructure } from './model/program-structure.model';
import { Course } from '../course/model';
import { University } from '../university/model';
import { MetaData } from '../MetaData/meta.model';
import * as fs from 'fs';
import { AdmissionProcessCards } from './model/admissionProcess.model';
import { ProgramHighlight } from './model/program-highlights.model';
import { Associations } from './model/associations.model';
import { AssociationsDTO } from './dtos/associations.dto';
import { ProgramHighlightDTO } from './dtos/program-highlights.dto';
import { Infos } from './model/info.model';
@Injectable()
export class CourseSpecializationService extends GenericService<
  CourseSpecialization,
  CreateCourseSpecializationDTO,
  UpdateCourseSpecializationDTO
>({
  defaultFindOptions: {
    include: [
      MetaData,
      Course,
      University,
      AdmissionProcessCards,
      FeesStructure,
      ProgramHighlight,
      ProgramStructure,
      Associations,
      Infos,
    ],
  },
  includes: [
    MetaData,
    Course,
    University,
    AdmissionProcessCards,
    FeesStructure,
    ProgramHighlight,
    ProgramStructure,
    Associations,
    Infos,
  ],
}) {
  constructor(
    @InjectModel(CourseSpecialization)
    private courseSpecialization: typeof CourseSpecialization,
    @InjectModel(FeesStructure)
    private feesStructure: typeof FeesStructure,
    @InjectModel(ProgramStructure)
    private programStructure: typeof ProgramStructure,
    @InjectModel(ProgramHighlight)
    private programHighlight: typeof ProgramHighlight,
    @InjectModel(Associations)
    private associations: typeof Associations,
    @InjectModel(AdmissionProcessCards)
    private admissionProcess: typeof AdmissionProcessCards,
    @InjectModel(Course)
    private course: typeof Course,

    private reqParams: RequestParamsService,
  ) {
    super(courseSpecialization, reqParams);
  }

  async create<CourseSpecialization>(
    dto: CreateCourseSpecializationDTO,
  ): Promise<CourseSpecialization> {
    const courseSpecialization = await super.create(dto);
    // await this.createOtherObjects(dto, courseSpecialization, true);
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
  async updateSyllabus(file: Express.Multer.File, id: string) {
    try {
      const events =
        await this.courseSpecialization.findByPk<CourseSpecialization>(id);
      if (!events) {
        throw new InternalServerErrorException('Event not found');
      }

      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/' + events.syllabus,
      );

      if (file && file.filename) {
        const newImagePath = '/documents/courses-syllabus/' + file.filename;

        if (fs.existsSync(filePath)) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await events.update({
          syllabus: newImagePath,
        });

        return 'course syllabus Uploaded Successfully';
      } else {
        return 'No file provided for syllabus Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async updatebrouchure(file: Express.Multer.File, id: string) {
    try {
      const events =
        await this.courseSpecialization.findByPk<CourseSpecialization>(id);
      if (!events) {
        throw new InternalServerErrorException('Course spl not found');
      }

      const filePath = join(
        __dirname,
        '../../../../',
        'backend/src/public/brouchure' + events.brouchure,
      );

      if (file && file.filename) {
        const newImagePath = '/documents/brouchure/' + file.filename;

        if (fs.existsSync(filePath)) {
          unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting old image:', err);
            } else {
              console.log('Old image deleted...');
            }
          });
        }

        await events.update({
          syllabus: newImagePath,
        });

        return 'course syllabus Uploaded Successfully';
      } else {
        return 'No file provided for syllabus Update';
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async updateCourseSpecializationImage(file: Express.Multer.File, id: string) {
    const courseSpecialization = await this.courseSpecialization.findByPk<CourseSpecialization>(id);
    const defaultImagePath = 'backend/src/public/media/default.png';
    const filePath = join(
      __dirname,
      '../../../../',
      'src/public/media' + courseSpecialization.cover_image,
    );
    if (!defaultImagePath)
      if (fs.existsSync(filePath)) {
        unlink(filePath, (err) => {
          if (err) {
            throw new InternalServerErrorException(err);
          }
          console.log('file deleted...');
        });
      }
    console.log(file, file?.path?.split('src/public')[1]);

    await this.courseSpecialization.update(
      {
        cover_image:
          '/media/course-specialization/cover-image/' + file.filename,
      },
      {
        where: {
          id,
        },
      },
    );
    return 'syllabus updated successfully';
  }

  async createOtherObjects(
    dto: CreateCourseSpecializationDTO | UpdateCourseSpecializationDTO,
    courseSpecialization: CourseSpecialization,
    isNewRecord: boolean,
  ) {
    if (!courseSpecialization?.isNewRecord) {
      await this.programStructure.destroy({
        where: {
          course_specialization_id: courseSpecialization.id,
        },
      });
      await this.admissionProcess.destroy({
        where: {
          course_specialization_id: courseSpecialization.id,
        },
      });
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
      dto.admissionProcess.map((item) => ({
        ...item,
        // image: `/media/course-specialization/extras/${item?.image}`,
        courseSpecialization: courseSpecialization.id,
      })),
    );
    await this.programStructure.bulkCreate(
      dto.program_structures.map((item) => ({
        ...item,
        //image: `/media/course-specialization/extras/${item?.image}`,
        course_specialization_id: courseSpecialization.id,
      })),
    );
    await this.programHighlight.bulkCreate(
      dto.program_highlight.map((item) => ({
        ...item,
        // image: `/media/course-specialization/extras/${item?.image}`,
        course_specialization_id: courseSpecialization.id,
      })),
    );
    await this.associations.bulkCreate(
      dto.associations.map((item) => ({
        ...item,
        image: `/media/course-specialization/extras/${item?.image}`,
        course_specialization_id: courseSpecialization.id,
      })),
    );
  }

  async createFeesStructure(
    dto: FeesStructureDTO,
    course_specialization_id: string,
  ) {
    const data = await this.feesStructure.findOne({
      where: { course_specialization_id: course_specialization_id },
    });
    if (data) {
      await this.feesStructure.update<FeesStructure>(
        { ...dto },
        {
          where: {
            course_specialization_id: course_specialization_id,
          },
        },
      );
      return 'Fees Structure Updated Successfully';
    } else {
      await this.feesStructure.create({
        ...dto,

        course_specialization_id: course_specialization_id,
      });
      return 'Fees Structure Created Successfully';
    }
  }

  async createProgramStructures(
    dto: ProgramStructureDTO[],
    course_specialization_id: string,
  ) {
    // Bulk create program structures
    await this.programStructure.bulkCreate(
      dto.map((item) => ({
        ...item,
        //image: `/media/course-specialization/extras/${item?.image}`,
        course_specialization_id: course_specialization_id,
      })),
    );
    return 'Program Structures Created Successfully';
  }

  async createProgramHighlights(
    dto: ProgramHighlightDTO[],
    course_specialization_id: string,
  ) {
    // Bulk create program highlights
    await this.programHighlight.bulkCreate(
      dto.map((item) => ({
        ...item,
        course_specialization_id: course_specialization_id,
      })),
    );
    return 'Program Highlights Created Successfully';
  }

  async createAdmissionProcesses(
    dto: CreateAdmissionProcessCardsDTO[],
    course_specialization_id: string,
  ) {
    // Bulk create admission process cards
    await this.admissionProcess.bulkCreate(
      dto.map((item) => ({
        ...item,
        course_specialization_id: course_specialization_id,
      })),
    );
    return 'Admission Processes Created Successfully';
  }

  async createAssociations(
    dto: AssociationsDTO[],
    course_specialization_id: string,
  ) {
    // Bulk create associations
    await this.associations.bulkCreate(
      dto.map((item) => ({
        ...item,
        //image: `/media/course-specialization/extras/${item?.image}`,
        course_specialization_id: course_specialization_id,
      })),
    );
    return 'Associations Created Successfully';
  }

  async findbyCourses(courseID: string): Promise<CourseSpecialization[]> {
    try {
      const specializations = await CourseSpecialization.findAll({
        where: { course_id: courseID },
      });

      if (!specializations || specializations.length === 0) {
        throw new NotFoundException(
          `No specializations found for course ID ${courseID}`,
        );
      }

      return specializations;
    } catch (error) {
      throw error;
    }
  }

  async CourseSpecializations(
    isInfinite: boolean,
    slug: string,
    limit: string,
    page: string,
  ) {
    const pageNumber = parseInt(page) || 1;
    const limits = parseInt(limit) || 6;
    const offset = (pageNumber - 1) * limits;
    let hasMore = false;
    let category;

    try {
      let whereClause: any = {};
      if (slug) {
        category = await this.course.findOne({ where: { slug: slug } });
        if (!category) {
          throw new Error('Course not found');
        }
        whereClause.course_id = category.id;
      }

      let pagination = {};
      if (isInfinite) {
        pagination = { limit: limits, offset: offset };
      }

      const [totalCourseSpecializations, courseSpecializations] =
        await Promise.all([
          slug
            ? this.courseSpecialization.count({ where: whereClause })
            : this.courseSpecialization.count(),
          this.courseSpecialization.findAll({
            include: [
              MetaData,
              Course,
              University,
              AdmissionProcessCards,
              FeesStructure,
              ProgramHighlight,
              ProgramStructure,
              Associations,
              Infos,
            ],
            where: whereClause,
            order: [['createdAt', 'DESC']],
            ...pagination,
          }),
        ]);

      if (totalCourseSpecializations > offset + limits) {
        hasMore = true;
      }

      return isInfinite
        ? { courseSpecializations, hasMore }
        : { count: totalCourseSpecializations, rows: courseSpecializations };
    } catch (error) {
      throw error;
    }
  }
}
