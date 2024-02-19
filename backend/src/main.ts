import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomeExceptionsFilter } from './core/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  // cors
  app.enableCors();

  // request logger
  app.use(morgan('dev'));

  // set prefix
  app.setGlobalPrefix('api/v1');

  // body limit
  app.use(json({ limit: '50mb' }));

  // set Globle filters
  app.useGlobalFilters(new CustomeExceptionsFilter());

  // set Globle Pipes
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties:false,
    skipNullProperties:false,
    skipUndefinedProperties:false,
    forbidNonWhitelisted:false,
    forbidUnknownValues:false,
  }));
  await app.listen(config.get('PORT'));
}
bootstrap();
