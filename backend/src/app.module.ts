import { Module } from '@nestjs/common';
import { DatabaseModule, JwtModule, RequestParamsModule } from './core/modules';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './core/guards';
import { ResponseInterceptor } from './core/interceptors';
import { UsersModule } from './modules/user';
import { ConfigrationModule } from './modules/configrations/configration.module';
import { BlogModule } from './modules/blog/blog.module';
import { EventModule } from './modules/configrations/event/event.module';
import { PageContentModule } from './modules/configrations/PageContent/pageContent.module';
import { EnquiryModule } from './modules/configrations/Enquiry/enquiry.module';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../src', 'public'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    // Globle Modules
    RequestParamsModule,
    JwtModule,
  
    //User Module
    UsersModule,

    //Configrations Module
    ConfigrationModule,
    //Blogs Module
    BlogModule,
    EventModule,
    PageContentModule,
    EnquiryModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
