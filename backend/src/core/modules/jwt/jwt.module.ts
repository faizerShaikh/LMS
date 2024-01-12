import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule as LibJwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    LibJwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWTKEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [LibJwtModule],
})
export class JwtModule {}
