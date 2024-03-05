
import { Table, Column, DataType ,HasMany,Model, Default} from 'sequelize-typescript';
import { CourseSpecialization } from '../../course-specialization/model';
import { MyBaseModel } from 'src/core/base.model';
import { type } from '../../metaData/dto/type.enum';


@Table({
  tableName: 'courses',
  modelName: 'Course',
  paranoid: true,
})
export class Course extends MyBaseModel {
  override type: type.COURSE;

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

  @Default('media/default.png')
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
