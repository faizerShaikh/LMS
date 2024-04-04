import { CourseSpecializationService } from './course-specialization.service';
import { CourseSpecializationController } from './course-specialization.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseSpecialization } from './model';
import { FeesStructure } from './model/fees-structure.model';
import { ProgramStructure } from './model/program-structure.model';
import { MetaData } from '../MetaData/meta.model';
import { AdmissionProcessCards } from './model/admissionProcess.model';
import { ProgramHighlight } from './model/program-highlights.model';
import { Associations } from './model/associations.model';
import { AdmissionProcessController } from './extras/admissionProcess.controller';
import { AdmissionProcessService } from './extras/admissionProcess.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      CourseSpecialization,
      ProgramStructure,
      FeesStructure,
      AdmissionProcessCards,
      MetaData,
      ProgramHighlight,
      Associations
    ]),
  ],
  controllers: [CourseSpecializationController,AdmissionProcessController],
  providers: [CourseSpecializationService,AdmissionProcessService],
})
export class CourseSpecializationModule {}
