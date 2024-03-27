import { CourseSpecializationService } from './course-specialization.service';
import { CourseSpecializationController } from './course-specialization.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseSpecialization } from './model';
import { FeesStructure } from './model/fees-structure.model';
import { ProgramStructure } from './model/program-structure.model';
import { MetaData } from '../MetaData/meta.model';
import { AdmissionProcessCards } from './model/admissionProcess.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      CourseSpecialization,
      ProgramStructure,
      FeesStructure,
      AdmissionProcessCards,
      MetaData,
    ]),
  ],
  controllers: [CourseSpecializationController],
  providers: [CourseSpecializationService],
})
export class CourseSpecializationModule {}
