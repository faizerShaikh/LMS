import {
  Table,
  IsUUID,
  PrimaryKey,
  Default,
  DataType,
  Column,
  ForeignKey,
  BelongsTo,
  Model,
} from 'sequelize-typescript';
import { CourseSpecialization } from './course-specialization.model';

@Table({
  tableName: 'fees-structures',
  modelName: 'FeesStructure',
  paranoid: true,
})
export class FeesStructure extends Model<FeesStructure> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Indian Semester Fees can not be empty',
      },
      notEmpty: {
        msg: 'Indian Semester Fees can not be empty',
      },
    },
  })
  indian_semester_fees: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Indian Annual Fees can not be empty',
      },
      notEmpty: {
        msg: 'Indian Annual Fees can not be empty',
      },
    },
  })
  indian_annual_fees: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Foreign Semester Fees can not be empty',
      },
      notEmpty: {
        msg: 'Foreign Semester Fees can not be empty',
      },
    },
  })
  foreign_semester_fees: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Foreign Annual Fees can not be empty',
      },
      notEmpty: {
        msg: 'Foreign Annual Fees can not be empty',
      },
    },
  })
  foreign_annual_fees: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Notes can not be empty',
      },
      notEmpty: {
        msg: 'Notes can not be empty',
      },
    },
  })
  notes: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Course Specialization can not be empty',
      },
      notEmpty: {
        msg: 'Course Specialization can not be empty',
      },
    },
  })
  @ForeignKey(() => CourseSpecialization)
  course_specialization_id: string;

  @BelongsTo(() => CourseSpecialization)
  course_specialization: CourseSpecialization;
}
