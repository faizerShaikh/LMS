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
    tableName: 'program-highlights',
    modelName: 'ProgramHighlight',
    paranoid: true,
  })
  export class ProgramHighlight extends Model<ProgramHighlight> {
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
  