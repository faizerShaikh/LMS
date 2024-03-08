import {
  Column,
  DataType,
  Default,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { CourseSpecialization } from '../../course-specialization/model';
import { MyBaseModel } from 'src/core/base.model';
import { type } from '../../metaData/dto/type.enum';

@Table({
  tableName: 'universities',
  modelName: 'University',
  paranoid: true,
})
export class University extends MyBaseModel {


  override type=type.UNIVERSITY
  
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

  @Default('/media/default.png')
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

}
