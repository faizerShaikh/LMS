import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { EventRegistration } from './eventRegistration.model';
import { EventRegistrationdto } from './dto/create-eventRegistration.dto';
import { UpdateEventRegistrationDto } from './dto/update-eventRegiter.dto';
import { InjectModel } from '@nestjs/sequelize';
import * as XLSX from 'xlsx';
import { join, relative } from 'path';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { MailsService } from 'src/common/modules';
import { MailerServices } from 'src/modules/configurations/Enquiry/mail/mail.service';
import { Events } from '../../event.model';


@Injectable()
export class EventRegistrationService extends GenericService<
  EventRegistration,
  EventRegistrationdto,
  UpdateEventRegistrationDto
>({ defaultFindOptions: {
  include:Events
} }) {
  constructor(
    @InjectModel(EventRegistration)
    private eventregistration: typeof EventRegistration,
    
    private mailservice: MailsService,
    private mailerService: MailerServices, 
    private reqparams: RequestParamsService,
  ) {
    super(eventregistration, reqparams);
  }

  getByEvent(eventId: string) {
    return this.getAll({
      where: {
        eventId: eventId,
      },
    });
  }

  async create<EventRegistration extends {} = any>(dto: EventRegistrationdto): Promise<EventRegistration> {
    try {
      const registration = await super.create(dto);
      console.log('registration created successfully');

      // Read the content of the email template file
      const emailTemplatePath = 'src/public/email-templates/registrationNotification.hbs'; // Modify this with the correct path
      const emailContent = readFileSync(emailTemplatePath, 'utf-8');

      // Send email after registration creation
      await this.mailerService.sendMail(dto.email, 'You have been registered successfully', emailContent);

      return registration;
    } catch (error) {
      console.error('Error creating registration:', error);
      throw error;
    }
  }
  async exportToExcel(data: any, filename: string): Promise<string> {
    try {
      if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
        return 'No registrations yet';
      }
  
      const registrations: EventRegistration[] = data.rows;
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
        registrations.map(reg => reg.dataValues),
      );
      const workbook: XLSX.WorkBook = {
        Sheets: { data: worksheet },
        SheetNames: ['data'],
      };
      const excelBuffer: any = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'buffer',
      });
  
      const directory = join(process.cwd(), 'src', 'public', 'event-registration');
      if (!existsSync(directory)) {
        mkdirSync(directory, { recursive: true });
      }
  
      const filePath = join(directory, `${filename}.xlsx`);
      require('fs').writeFileSync(filePath, excelBuffer);
  
      // Convert the absolute path to a relative path
      const relativePath = relative(join(process.cwd(), 'src', 'public'), filePath).replace(/\\/g, '/');
      console.log(`Excel file '${filename}.xlsx' successfully exported to '${relativePath}'.`);
  
      return relativePath;
    } catch (error) {
      console.error(`Error exporting Excel file: ${error.message}`);
      throw error;
    }
  }
  
}
