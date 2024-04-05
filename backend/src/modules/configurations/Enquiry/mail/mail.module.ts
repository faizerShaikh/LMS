import { Module } from '@nestjs/common';
import { MailerServices } from './mail.service';

@Module({
  providers: [MailerServices],
  exports: [MailerServices],
})
export class MailModule {}
