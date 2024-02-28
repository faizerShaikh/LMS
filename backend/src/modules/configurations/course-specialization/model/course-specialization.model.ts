import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  IsUUID,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Course } from '../../course/model';
import { University } from '../../university/model';
import { ProgramStructure } from './program-structure.model';
import { FeesStructure } from './fees-structure.model';
import { MyBaseModel } from 'src/core/base.model';
import { type } from '../../metaData/dto/type.enum';

@Table({
  tableName: 'course-specializations',
  modelName: 'CourseSpecialization',
  paranoid: true,
})
export class CourseSpecialization extends MyBaseModel {
  override type= type.COURSE_SPECIALIZATION;
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
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Description can not be empty',
      },
      notEmpty: {
        msg: 'Description can not be empty',
      },
    },
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Eligibilty can not be empty',
      },
      notEmpty: {
        msg: 'Eligibilty can not be empty',
      },
    },
  })
  eligibilty: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Delivery Mode can not be empty',
      },
      notEmpty: {
        msg: 'Delivery Mode can not be empty',
      },
    },
  })
  delivery_mode: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Credits can not be empty',
      },
      notEmpty: {
        msg: 'Credits can not be empty',
      },
    },
  })
  credits: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: {
        msg: 'Is Internationally Recognised can not be empty',
      },
      notEmpty: {
        msg: 'Is Internationally Recognised can not be empty',
      },
    },
  })
  is_internationally_recognised: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Learning Pedagogy can not be empty',
      },
      notEmpty: {
        msg: 'Learning Pedagogy can not be empty',
      },
    },
  })
  learning_pedagogy: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Duration Pedagogy can not be empty',
      },
      notEmpty: {
        msg: 'Duration Pedagogy can not be empty',
      },
    },
  })
  duration: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Medium of Instructions can not be empty',
      },
      notEmpty: {
        msg: 'Medium of Instructions can not be empty',
      },
    },
  })
  medium_of_instructions: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Certificate Provided can not be empty',
      },
      notEmpty: {
        msg: 'Certificate Provided can not be empty',
      },
    },
  })
  certificate_provided: boolean;

  @Column({
    type: DataType.STRING,
  })
  cover_image: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Students Enrolled can not be empty',
      },
      notEmpty: {
        msg: 'Students Enrolled can not be empty',
      },
    },
  })
  students_enrolled: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Is Published can not be empty',
      },
      notEmpty: {
        msg: 'Is Published can not be empty',
      },
    },
  })
  is_published: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'University can not be empty',
      },
      notEmpty: {
        msg: 'University can not be empty',
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
        msg: 'Course can not be empty',
      },
      notEmpty: {
        msg: 'Course can not be empty',
      },
    },
  })
  @ForeignKey(() => Course)
  course_id: string;

  @BelongsTo(() => Course)
  course: Course;

  @HasMany(() => ProgramStructure, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  program_structures: ProgramStructure[];

  @HasOne(() => FeesStructure, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
    foreignKey: 'course_specialization_id',
  })
  fees_structure: FeesStructure;

}
