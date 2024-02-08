import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course } from './model';
import { CourseSpecialization } from '../course-specialization/model';

@Module({
  imports: [SequelizeModule.forFeature([Course, CourseSpecialization])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
