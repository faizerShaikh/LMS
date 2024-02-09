import { Module } from '@nestjs/common';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';
import { CourseSpecializationModule } from './course-specialization/course-specialization.module';

@Module({
  imports: [UniversityModule, CourseModule, CourseSpecializationModule],
  controllers: [],
  providers: [],
})
export class ConfigrationModule {}
