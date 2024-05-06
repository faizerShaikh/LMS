import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Table,
} from 'sequelize-typescript';
import { Course } from '../../course/model';
import { University } from '../../university/model';
import { ProgramStructure } from './program-structure.model';
import { FeesStructure } from './fees-structure.model';
import { MyBaseModel } from 'src/core/base.model';
import { AdmissionProcessCards } from './admissionProcess.model';
import { MetaDataType } from '../../MetaData/dto/type.enum';
import { ProgramHighlight } from './program-highlights.model';
import { Associations } from './associations.model';
import { Infos } from './info.model';

@Table({
  tableName: 'course-specializations',
  modelName: 'CourseSpecialization',
  paranoid: true,
})
export class CourseSpecialization extends MyBaseModel {
  override type = MetaDataType.COURSE_SPECIALIZATION;
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
    type: DataType.TEXT,
    allowNull: true,
    // validate: {
    //   notNull: {
    //     msg: 'textarea can not be empty',
    //   },
    //   notEmpty: {
    //     msg: 'textarea can not be empty',
    //   },
    // },
  })
  textarea: string;

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
    type: DataType.BOOLEAN,
    defaultValue: false,
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
    type: DataType.TEXT
  })
  notes: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  courses: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  webinar: boolean;

  @Column({
    type: DataType.STRING,
  })
  learningPath: string;

  @Column({
    type: DataType.STRING,
  })
  brouchure: string;

  // @Column({
  //   type: DataType.BOOLEAN,
  // })
  // internationalRegonization: boolean;
  
  @Column({
    type: DataType.STRING,
  })
  learningPedagogy: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  specialization: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  beneficiaries: string;

  @Column({
    type: DataType.TEXT
  })
  syllabus:string

  // @Column({
  //   type: DataType.TEXT,
  //   allowNull: true,
  //   get() {
  //     const value = this.getDataValue('association');
  //     return value ? JSON.parse(value) : null;
  //   },
  //   set(value: any) {
  //     this.setDataValue('association', JSON.stringify(value));
  //   },
  // })
  // association: { name: string; bio: string; image: string };

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

  @HasMany(() => AdmissionProcessCards, {
    onDelete: 'CASCADE',
    hooks: true,
  })
  admissionProcess: AdmissionProcessCards[];

  @HasMany(() => Associations, {
    onDelete: 'CASCADE',
    hooks: true,
  })
  association: Associations[];

  @HasMany(() => ProgramHighlight, {
    onDelete: 'CASCADE',
    hooks: true,
  })
  programHiglights: ProgramHighlight[];

  @HasOne(() => FeesStructure, {
    onDelete: 'CASCADE',
    hooks: true,
    // foreignKey: 'course_specialization_id', 
  })
  fees_structure: FeesStructure;

  
  @HasOne(() => Infos, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
    // foreignKey: 'course_specialization_id',
  })
  info: Infos;

}
