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
import { AssociationController } from './extras/association.controller';
import { ProgramHighlightController } from './extras/program-highligh.controller';
import { AssociationService } from './extras/association.service';
import { ProgramHighlightService } from './extras/program-highlights.service';
import { ProgramStructureController } from './extras/program-structure.controller';
import { ProgramStructureService } from './extras/program-structure.service';
import { Infos } from './model/info.model';
import { InfoController } from './extras/info.controller';
import { InfoService } from './extras/info.service';

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
      Infos
    ]),
  ],
  controllers: [
    CourseSpecializationController,
    AdmissionProcessController,
    AssociationController,
    ProgramHighlightController,
    ProgramStructureController,
    InfoController
  ],
  providers: [
    CourseSpecializationService,
    AdmissionProcessService,
    AssociationService,
    ProgramHighlightService,
    ProgramStructureService,
    InfoService
  ],
})
export class CourseSpecializationModule {}
