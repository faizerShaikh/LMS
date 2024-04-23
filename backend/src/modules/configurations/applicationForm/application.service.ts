import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenericService, RequestParamsService } from 'src/core/modules';
import * as XLSX from 'xlsx';
import { join, relative } from 'path';
import { existsSync, promises as fsPromises, mkdirSync } from 'fs';
import { CourseSpecialization } from '../course-specialization/model';
import { Course } from '../course/model';
import { University } from '../university/model';
import { ApplicationForm } from '../applicationForm/application.model';
import { MailerServices } from '../Enquiry/mail/mail.service';

@Injectable()
export class ApplicationService extends GenericService({
  defaultFindOptions:{
    include:[
      CourseSpecialization, Course, University
    ]
  },
  includes: [CourseSpecialization, Course, University],
}) {
  constructor(
    @InjectModel(ApplicationForm)
    private applicationModel: typeof ApplicationForm,
    private reqParams: RequestParamsService,
    private mailerService: MailerServices, // Inject the mail service
  ) {
    super(applicationModel, reqParams);
  }

  async exportToExcel(data: any, eventName: string): Promise<string> {
    try {
      if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
        return 'No registrations yet';
      }

      const registrations: ApplicationForm[] = data.rows;
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
        registrations.map((reg) => reg.toJSON()),
      );
      const workbook: XLSX.WorkBook = {
        Sheets: { data: worksheet },
        SheetNames: ['data'],
      };
      const excelBuffer: any = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'buffer',
      });

      const directory = join(
        process.cwd(),
        'src',
        'public',
        'event-registration',
      );
      if (!existsSync(directory)) {
        mkdirSync(directory, { recursive: true });
      }

      const filename = `${eventName}.xlsx`;
      const filePath = join(directory, filename);
      await fsPromises.writeFile(filePath, excelBuffer);

      const relativePath = relative(
        join(process.cwd(), 'src', 'public'),
        filePath,
      ).replace(/\\/g, '/');
      console.log(
        `Excel file '${filename}' successfully exported to '${relativePath}'.`,
      );

      return relativePath;
    } catch (error) {
      console.error(`Error exporting Excel file: ${error.message}`);
      throw error;
    }
  }

  // Override the create method to send email after application creation
  async create<ApplicationForm extends {} = any>(dto: any): Promise<ApplicationForm> {
    try {
      const application = await super.create(dto);
      console.log('Application created successfully');

      // Prepare email content
      const emailSubject = 'New Application Created';
      const emailContent = `Hello,\n\nA new application has been created.\n\nThank you.`;

      // Send email after application creation
      await this.mailerService.sendMail(dto.emailID, emailSubject, emailContent);

      return application;
    } catch (error) {
      console.error('Error creating application:', error);
      throw error;
    }
  }
}
