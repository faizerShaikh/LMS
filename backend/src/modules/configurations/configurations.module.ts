import { Module } from '@nestjs/common';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';
import { CourseSpecializationModule } from './course-specialization/course-specialization.module';
import { GalleryModule } from './Gallery/gallery.module';
import { PressModule } from './pressRelease/press.module';
import { FAQModule } from './faq/faq.module';
import { MetaDataModule } from './metaData/meta.module';
import { BlogModule } from '../blog/blog.module';
import { EventModule } from './event/event.module';
import { PageContentModule } from './PageContent/pageContent.module';
import { EnquiryModule } from './Enquiry/enquiry.module';
import { GlobalPartnerModule } from './globalPartner/global-partner.module';
import { ContactModule } from './cotacDetails/contact.module';
import { WebinarModule } from './webinar/webinar.module';

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
    ContactModule,
    WebinarModule
  ],
  controllers: [],
  providers: [],
})
export class configurationsModule {}
