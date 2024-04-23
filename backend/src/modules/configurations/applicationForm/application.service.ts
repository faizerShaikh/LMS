import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { ApplicationForm } from './application.model';
import * as XLSX from 'xlsx';
import { join,  relative } from 'path';
import { existsSync, promises as fsPromises, mkdirSync } from 'fs';
import { CourseSpecialization } from '../course-specialization/model';
import { Course } from '../course/model';
import { University } from '../university/model';

@Injectable()
export class ApplicationService extends GenericService({
  includes: [CourseSpecialization, Course, University],
}) {
  constructor(
    @InjectModel(ApplicationForm)
    private applicationModel: typeof ApplicationForm,
    private reqParams: RequestParamsService,
  ) {
    super(applicationModel, reqParams);
  }

  async exportToExcel(data: any, eventName: string): Promise<string> {
    try {
      if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
        return 'No registrations yet';
      }

      const registrations: ApplicationForm[] = data.rows; // Assuming Application is the model class
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
        registrations.map((reg) => reg.toJSON()), // toJSON() to convert Sequelize instance to plain object
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
      await fsPromises.writeFile(filePath, excelBuffer); // Using async file write

      // Convert the absolute path to a relative path
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
}
