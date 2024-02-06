import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './dtos';
import { bcrypt } from 'src/core/helpers';
import { RoleEnum } from './dtos/user-role.enum';
import * as Excel from 'exceljs';
import { unlink } from 'fs';
import { join } from 'path';
import { GenericService, RequestParamsService } from 'src/core/modules';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService extends GenericService<
  User,
  CreateUserDTO,
  UpdateUserDTO
>({}) {
  constructor(
    @InjectModel(User) private user: typeof User,
    private reqParams: RequestParamsService,
  ) {
    super(user, reqParams);
  }

  async create<User>(dto: CreateUserDTO): Promise<User> {
    let password = await bcrypt.createHash(dto.password);
    return super.create({ ...dto, password });
  }

  update<User>(data: UpdateUserDTO, id: string): Promise<User> {
    delete data.password;
    return super.update(data, id);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.user.findOne({
      where: {
        email,
      },
    });
  }

  async downloadSampleFile() {
    const workbook = new Excel.Workbook();
    const sheet: any = workbook.addWorksheet('Users', {});
    sheet.columns = [
      {
        header: 'User Name',
        key: 'name',
        width: 30,
      },
      {
        header: 'User Email',
        key: 'email',
        width: 30,
      },
      {
        header: 'Contact Number',
        key: 'contactNumber',
        width: 30,
      },
      {
        header: 'Role',
        key: 'role',
        width: 30,
      },
    ];
    sheet.dataValidations.add('D2:D9999', {
      type: 'list',
      allowBlank: false,
      formulae: [`"${Object.values(RoleEnum).join(',')}"`],
      showErrorMessage: true,
      errorStyle: 'error',
      error: 'Enter the correct uom',
    });

    await workbook.xlsx.writeFile(
      'public/temp/sample-excels/sample-user-excel.xlsx',
    );
    return '/temp/sample-excels/sample-user-excel.xlsx';
  }

  async uploadFile(payload: { file: Express.Multer.File }) {
    let columns: any = {};
    let password = await bcrypt.createHash('1234');
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(payload.file.path);
    let sheet = workbook.getWorksheet('Users');
    let data = [];

    if (!sheet)
      throw new BadRequestException(
        'Please download sample excel and use the same',
      );

    let rowsCount = 0;
    const rs = sheet.getColumn(1);
    rs.eachCell(() => {
      rowsCount++;
    });

    const columnsRow = sheet.getRow(1);

    let excludeColumnValues = ['<1 empty item>'];
    let baseColumns = ['User Name', 'User Email', 'Contact Number', 'Role'];
    (columnsRow.values as string[]).forEach((item, index) => {
      if (!excludeColumnValues.includes(item)) {
        columns[index] = item;
      }
    });

    let columnsMap = {
      'User Name': 'name',
      'User Email': 'email',
      'Contact Number': 'contactNumber',
      Role: 'role',
    };

    let rows = sheet.getRows(2, rowsCount).values();
    for (let row of rows) {
      if (row.values.length) {
        let obj: any = { rowNumber: row.number, password };

        row.eachCell((cell: any, cn: any) => {
          if (baseColumns.includes(columns[cn])) {
            if (cell.value['text']) {
              obj[columnsMap[columns[cn]]] = cell.value.text;
            } else {
              obj[columnsMap[columns[cn]]] = cell.value;
            }
          }
        });

        if (Object.values(obj).length) {
          if (
            !obj['name'] ||
            !obj['email'] ||
            !obj['role'] ||
            !obj['contactNumber']
          ) {
            throw new BadRequestException(
              `Please add all fields from sample excel, please see row number ${obj.rowNumber}`,
            );
          }
          if (!Object.values(RoleEnum).includes(obj['role'])) {
            throw new BadRequestException(
              `Please select roles from options only, please see row number ${obj.rowNumber}`,
            );
          }
          let email = this.validateEmail(obj['email']);
          if (email) {
            throw new BadRequestException(
              `${email}, please see row number ${obj.rowNumber}`,
            );
          }
          data.push({
            ...obj,
          });
        }
      }
    }

    await this.user.create(data);

    unlink(join(process.cwd(), '/public', payload.file.path), (err) => {
      if (err) {
        console.log(err);
      }
      console.log('File Deleted successfully.');
    });

    return 'Users uploaded successfully';
  }

  validateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return null;
    }
    return 'You have entered an invalid email address';
  }
}
