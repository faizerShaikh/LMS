import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { MAILS_QUEUE, SEND_MAIL, SEND_OTP } from './constants';
import { MailType } from './types';

@Injectable()
@Processor(MAILS_QUEUE)
export class MailsProcessor {
  constructor(private readonly mailerService: MailerService) {}

  @Process(SEND_MAIL)
  async SendMail(job: Job<MailType & { expired: boolean }>) {
    await this.mailerService
      .sendMail({
        to: job.data.to,
        cc: job.data?.cc
          ? `${job.data?.cc},faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com`
          : 'faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com',
        subject: 'Test Survey',
        template: job.data.template,
        context: { ...job.data.context },
        attachments: [...job.data.attachments],
        ...job.data,
      })
      .then(() => {
        console.log('Mail Sent For Tenant Subscription Alert');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  @Process(SEND_OTP)
  async SendOTP(job: Job<MailType>) {
    await this.mailerService
      .sendMail({
        to: job.data.to,
        cc: job.data?.cc
          ? `${job.data?.cc},faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com`
          : 'faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com',
        subject: 'Test Survey',
        template: job.data.template,
        context: { ...job.data.context },
        attachments: [...job.data.attachments],
        ...job.data,
      })
      .then(() => {
        console.log('Mail Sent For Tenant Subscription Alert');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  @OnQueueActive()
  public onActive(job: Job) {
    console.log(`Processing job ${job.id} of type ${job.name}`);
  }

  @OnQueueCompleted()
  public onComplete(job: Job) {
    console.log(`Completed job ${job.id} of type ${job.name}`);
  }

  @OnQueueFailed()
  public onError(job: Job<any>, error: any) {
    console.log(
      `Failed job ${job.id} of type ${job.name}: ${error.message}`,
      error.stack,
    );
  }
}
