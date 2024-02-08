import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { University } from './model';
import { CourseSpecialization } from '../course-specialization/model';

@Module({
  imports: [SequelizeModule.forFeature([University, CourseSpecialization])],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
