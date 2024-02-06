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
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
