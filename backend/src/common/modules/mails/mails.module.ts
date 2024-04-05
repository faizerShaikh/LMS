import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { BullModule } from '@nestjs/bull';
import { MAILS_QUEUE } from './constants';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { MailsProcessor } from './mails.processor';

@Global()
@Module({
  imports: [
    BullModule.registerQueue({
      name: MAILS_QUEUE,
    }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          maxConnections: 3, //<-----------ADD THIS LINE
          pool: true, //<-----------ADD THIS LINE
          requireTLS: false,
          host: configService.get(process.env.EMAIL_HOST),
          port: configService.get(process.env.EMAIL_PORT),
          ignoreTLS: false,
          secure: false,

          auth: {
            user: configService.get(process.env.EMAIL_USER),
            pass: configService.get(process.env.EMAIL_PASSWORD),
          },
        },
        defaults: {
          from: configService.get(process.env.EMAIL_FROM),
        },
        preview: false,
        template: {
          dir: 'src/public/email-templates',
          adapter: new HandlebarsAdapter({}),
          options: {
            strict: true,
            defaultLayout: false,
          },
        },
      }),
    }),
  ],
  exports: [MailsService],
  providers: [MailsService, MailsProcessor],
})
export class MailsModule {}
