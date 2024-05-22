import {
  Model,
  Column,
  Table,
  PrimaryKey,
  DataType,
  Default,
  IsUUID,
  BelongsTo,
  ForeignKey,
  BeforeCreate,
} from 'sequelize-typescript';
import { CourseSpecialization } from '../course-specialization/model';
import { Course } from '../course/model';
import { University } from '../university/model';

@Table({
  tableName: 'application-forms', // Changed to camelCase
  modelName: 'ApplicationForm',
  paranoid: true,
})
export class ApplicationForm extends Model<ApplicationForm> {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  fullName: string;

  @Column
  mobileNumber: string;

  @Column
  emailID: string;

  @Column
  dateOfBirth: Date; // Changed to Date type

  @Column
  gender: string;

  @Column
  nationality: string;

  @Column
  governmentIDType: string;

  @Column
  country: string;

  @Column
  state: string;

  @Column
  city: string;

  @Column
  howDoYouKnowAboutRiseBack: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'University id can not be empty',
      },
      notEmpty: {
        msg: 'University id can not be empty',
      },
    },
  })
  @ForeignKey(() => University)
  university_id: string;

  @BelongsTo(() => University)
  university: University;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Course id can not be empty',
      },
      notEmpty: {
        msg: 'Course id can not be empty',
      },
    },
  })
  @ForeignKey(() => Course)
  course_id: string;

  @BelongsTo(() => Course)
  course: Course; 

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Course Secialization id can not be empty',
      },
      notEmpty: {
        msg: 'Course Secialization id can not be empty',
      },
    },
  })
  @ForeignKey(() => CourseSpecialization)
  specialization_id: string;

  @BelongsTo(() => CourseSpecialization)
  specialization: CourseSpecialization;

  
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  srNo: string;

  
  @BeforeCreate
  static async generateSerialNumber(instance: ApplicationForm) {
    const latestRecord = await ApplicationForm.findOne({
      order: [['createdAt', 'DESC']]
    });
 
    let serialNumber = 'APL000001';

    if (latestRecord) {
      const lastSerialNumber = latestRecord.getDataValue('srNo');
      const lastSerialNumberInt = parseInt(lastSerialNumber.substring(3), 10);
      const nextSerialNumberInt = lastSerialNumberInt + 1;
      const nextSerialNumber = nextSerialNumberInt.toString().padStart(6, '0');
      serialNumber = `APL${nextSerialNumber}`;
    }

    instance.setDataValue('srNo', serialNumber);
  }
}
