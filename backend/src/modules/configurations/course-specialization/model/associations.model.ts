import {
  Table,
  IsUUID,
  PrimaryKey,
  Default,
  DataType,
  Column,
  BelongsTo,
  ForeignKey,
  Model,
} from 'sequelize-typescript';
import { CourseSpecialization } from './course-specialization.model';

@Table({
  tableName: 'associations',
  modelName: 'association',
  paranoid: true,
})
export class Associations extends Model<Associations> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Title can not be empty',
      },
      notEmpty: {
        msg: 'Title can not be empty',
      },
    },
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Sub Title can not be empty',
      },
      notEmpty: {
        msg: 'Sub Title can not be empty',
      },
    },
  })
  subTitle: string;

  @Column
  image: string;

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
