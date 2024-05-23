import { CourseSpecializationService } from './course-specialization.service';
import { CourseSpecializationController } from './course-specialization.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdmissionProcessController } from './extras/admissionProcess.controller';
import { AdmissionProcessService } from './extras/admissionProcess.service';
import { AssociationController } from './extras/association.controller';
import { ProgramHighlightController } from './extras/program-highligh.controller';
import { AssociationService } from './extras/association.service';
import { ProgramHighlightService } from './extras/program-highlights.service';
import { ProgramStructureController } from './extras/program-structure.controller';
import { ProgramStructureService } from './extras/program-structure.service';
import { InfoController } from './extras/info.controller';
import { InfoService } from './extras/info.service';
import { Course } from '../course/model';
import { CourseService } from '../course/course.service';
import { CourseController } from '../course/course.controller';
import { AdmissionProcessCards, Associations, CourseSpecialization, FeesStructure, Infos, ProgramHighlight, ProgramStructure } from './model';
import { MetaData } from '../MetaData/meta.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      CourseSpecialization,
      ProgramStructure,
      FeesStructure,
      AdmissionProcessCards,
      MetaData,
      ProgramHighlight,
      Associations,
      Infos,
      Course
    ]),
  ],
  controllers: [
    CourseSpecializationController,
    AdmissionProcessController,
    AssociationController,
    ProgramHighlightController,
    ProgramStructureController,
    InfoController,
    CourseController
  ],
  providers: [
    CourseSpecializationService,
    AdmissionProcessService,
    AssociationService,
    ProgramHighlightService,
    ProgramStructureService,
    InfoService,
    CourseService
  ],
})
export class CourseSpecializationModule {}
