import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { Enquiry } from './enquiry.model';
import { EnquiryDto, UpdateEnquiryDTO } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import * as XLSX from 'xlsx';
import { join, relative } from 'path';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { MailerServices } from './mail/mail.service';
import { MailsService } from 'src/common/modules';

@Injectable()
export class EnquiryService extends GenericService<
  Enquiry,
  EnquiryDto,
  UpdateEnquiryDTO
>({}) {
  constructor(
    @InjectModel(Enquiry) private enquiry: typeof Enquiry,
    private reqParams: RequestParamsService,
    private mailservice: MailsService,
    private mailerService: MailerServices, 
  ) {
    super(enquiry, reqParams);
  }

  async exportToExcel(data: any, filename: string): Promise<string> {
    try {
      if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
        throw new Error('Invalid data Format');
      }

      const enquiry: Enquiry[] = data.rows;
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
        enquiry.map((reg) => reg.dataValues),
      );
      const workbook: XLSX.WorkBook = {
        Sheets: { data: worksheet },
        SheetNames: ['data'],
      };
      const excelBuffer: any = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'buffer',
      });
      const directory = join(process.cwd(), 'src', 'public', 'enquiries');

      if (!existsSync(directory)) {
        mkdirSync(directory, { recursive: true });
      }

      const filePath = join(directory, `${filename}.xlsx`);
      require('fs').writeFileSync(filePath, excelBuffer);

      // Convert the absolute path to a relative path
      const relativePath = relative(join(process.cwd(), 'src', 'public'), filePath);

      return relativePath.replace(/\\/g, '/'); // Replace backslashes with forward slashes
    } catch (error) {
      console.error(`Error exporting Excel File: ${error.message}`);
      throw error;
    }
  }


  async create<Enquiry extends {} = any>(dto: EnquiryDto): Promise<Enquiry> {
    try {
      const enquiry = await super.create(dto);
      console.log('Enquiry created successfully');

      // Read the content of the email template file
      const emailTemplatePath = 'src/public/email-templates/enquiryNotification.hbs'; // Modify this with the correct path
      const emailContent = readFileSync(emailTemplatePath, 'utf-8');

      // Send email after enquiry creation
      await this.mailerService.sendMail(dto.email, 'New Enquiry Created', emailContent);

      return enquiry;
    } catch (error) {
      console.error('Error creating enquiry:', error);
      throw error;
    }
}
}
