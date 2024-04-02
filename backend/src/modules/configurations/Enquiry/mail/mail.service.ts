import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerServices {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'www.rindeumair@gmail.com',
        pass: 'vpxf hzfp sclk yjms',
      },
    });
  }

  async sendMail(to: string, subject: string, template: string): Promise<void> {
    // Send the email with HTML content
    await this.transporter.sendMail({
      from: 'www.rindeumair@gmail.com',
      to,
      subject,
      html: template, // Use the provided template
    });
  }
}
