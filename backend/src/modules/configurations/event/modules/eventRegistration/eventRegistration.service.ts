import { Injectable } from '@nestjs/common';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { EventRegistration } from './eventRegistration.model';
import { EventRegistrationdto } from './dto/create-eventRegistration.dto';
import { UpdateEventRegistrationDto } from './dto/update-eventRegiter.dto';
import { InjectModel } from '@nestjs/sequelize';
import * as XLSX from 'xlsx';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';


@Injectable()
export class EventRegistrationService extends GenericService<
  EventRegistration,
  EventRegistrationdto,
  UpdateEventRegistrationDto
>({ defaultFindOptions: {} }) {
  constructor(
    @InjectModel(EventRegistration)
    private eventregistration: typeof EventRegistration,
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

  async exportToExcel(data: any, filename: string): Promise<string> {
    try {
      if (!data || !Array.isArray(data.rows) || data.rows.length === 0) {
        throw new Error('Invalid data format.');
      }

      const registrations: EventRegistration[] = data.rows;
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(registrations.map(reg => reg.dataValues));
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

      const directory = join(process.cwd(), 'src','public', 'event-registration');
      if (!existsSync(directory)) {
        mkdirSync(directory, { recursive: true });
      }

      const filePath = join(directory, `${filename}.xlsx`);
      require('fs').writeFileSync(filePath, excelBuffer);
      
      console.log(`Excel file '${filename}.xlsx' successfully exported to '${directory}'.`);
      
      return filePath;
    } catch (error) {
      console.error(`Error exporting Excel file: ${error.message}`);
      throw error;
    }
  }
}
