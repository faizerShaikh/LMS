import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { University } from './model';
import { CourseSpecialization } from '../course-specialization/model';
import { MetaData } from '../Meta Data/meta.model';

@Module({
  imports: [SequelizeModule.forFeature([University, CourseSpecialization,MetaData])],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
