import { Module } from '@nestjs/common';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';
import { CourseSpecializationModule } from './course-specialization/course-specialization.module';
import { GalleryModule } from './Gallery/gallery.module';
import { PressModule } from './Press Release/press.module';
import { FAQModule } from './FAQ/faq.module';
import { MetaDataModule } from './Meta Data/meta.module';

@Module({
  imports: [
    UniversityModule,
    CourseModule,
    CourseSpecializationModule,
    PressModule,
    GalleryModule,
    FAQModule,
    MetaDataModule
  ],
  controllers: [],
  providers: [],
})
export class ConfigrationModule {}
