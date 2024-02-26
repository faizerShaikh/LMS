import { Module } from '@nestjs/common';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';
import { CourseSpecializationModule } from './course-specialization/course-specialization.module';
import { GalleryModule } from './Gallery/gallery.module';
import { PressModule } from './Press Release/press.module';
import { FAQModule } from './FAQ/faq.module';
import { MetaDataModule } from './Meta Data/meta.module';
import { BlogModule } from '../blog/blog.module';
import { EventModule } from './event/event.module';
import { PageContentModule } from './PageContent/pageContent.module';
import { EnquiryModule } from './Enquiry/enquiry.module';
import { GlobalPartnerModule } from './Global Partner/global-partner.module';
import { ContactModule } from './Contact Details/contact.module';

@Module({
  imports: [
    UniversityModule,
    CourseModule,
    CourseSpecializationModule,
    PressModule,
    GalleryModule,
    FAQModule,
    MetaDataModule,
    BlogModule,
    EventModule,
    PageContentModule,
    EnquiryModule,
    GlobalPartnerModule,
    ContactModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
