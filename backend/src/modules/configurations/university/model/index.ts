import {
  Column,
  DataType,
  Default,
  HasMany,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { CourseSpecialization } from '../../course-specialization/model';
import { MetaData } from '../../metaData/meta.model';

@Table({
  tableName: 'universities',
  modelName: 'University',
  paranoid: true,
})
export class University extends Model<University> {
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
        msg: 'Short Name can not be empty',
      },
      notEmpty: {
        msg: 'Short Name can not be empty',
      },
    },
  })
  short_name: string;

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
  university_image: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  no_of_courses: number;

  @HasMany(() => CourseSpecialization, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  specializations: CourseSpecialization[];

  @HasOne(()=>MetaData)
  metaData:string
}
