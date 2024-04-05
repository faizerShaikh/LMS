import {
  Column,
  DataType,
  Default,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { CourseSpecialization } from '.';

@Table({
  tableName: 'admission-process-cards',
  paranoid: true,
})
export class AdmissionProcessCards extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Default('/media/default.png')
  @Column
  image: string;

  @Column
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'description can not be null',
      },
      notEmpty: {
        msg: 'description can not be empty',
      },
    },
  })
  description: string;

  @ForeignKey(() => CourseSpecialization)
  @Column
  course_specialization_id: string;
}
