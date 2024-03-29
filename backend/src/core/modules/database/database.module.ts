import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config';

@Global()
@Module({
  imports: [
    SequelizeModule.forRoot({
      ...databaseConfig[process.env.NODE_ENV || 'development'],
      autoLoadModels: true,
      sync: true,
      alter: true,
    }),
  ],
})
export class DatabaseModule {}
