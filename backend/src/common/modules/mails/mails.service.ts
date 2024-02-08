import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { MAILS_QUEUE, SEND_MAIL, SEND_OTP } from './constants';

import { MailType } from './types';

@Injectable()
export class MailsService {
  constructor(@InjectQueue(MAILS_QUEUE) private readonly mailQueue: Queue) {}

  async SendMail(body: MailType) {
    try {
      await this.mailQueue.add(
        SEND_MAIL,
        { ...body },
        {
          removeOnComplete: true,
          delay: 3000,
        },
      );
    } catch (error) {
      console.log('Error while adding task for ' + SEND_MAIL + 'email');
    }
  }

  async SendOTP(body: MailType) {
    try {
      await this.mailQueue.add(
        SEND_OTP,
        { ...body },
        {
          removeOnComplete: true,
          delay: 3000,
        },
      );
    } catch (error) {
      console.log('Error while adding task for ' + SEND_OTP + 'email');
    }
  }
}
