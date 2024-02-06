import {
  Column,
  DataType,
  Default,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { CourseSpecialization } from '../../course-specialization/model';

@Table({
  tableName: 'courses',
  modelName: 'Course',
  paranoid: true,
})
export class Course extends Model<Course> {
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
        msg: 'Name can not be empty',
      },
      notEmpty: {
        msg: 'Name can not be empty',
      },
    },
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Description can not be empty',
      },
      notEmpty: {
        msg: 'Description can not be empty',
      },
      len: {
        msg: 'Description length must be between 1 to 1000 characters',
        args: [1, 1000],
      },
    },
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  course_image: string;

  @HasMany(() => CourseSpecialization, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  specializations: CourseSpecialization[];
}
