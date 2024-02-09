import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { User } from '../users/models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MailsModule } from 'src/common/modules';
import { JwtStrategy } from './strategy';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWTKEY'),
      }),
      inject: [ConfigService],
    }),
    MailsModule,
  ],
  controllers: [AuthController, AuthController],
  providers: [AuthService, AuthService, ],
})
export class AuthModule {}
