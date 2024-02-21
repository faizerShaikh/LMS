import { Module } from '@nestjs/common';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';
import { CourseSpecializationModule } from './course-specialization/course-specialization.module';
import { GalleryModule } from './Gallery/gallery.module';

@Module({
  imports: [UniversityModule, CourseModule, CourseSpecializationModule,GalleryModule],
  controllers: [],
  providers: [],
})
export class ConfigrationModule {}
