import {
  AllowNull,
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
import { CourseType } from '../dtos/course-type.enum';

@Table({
  tableName: 'course-specializations',
  modelName: 'CourseSpecialization',
  paranoid: true,
})
export class CourseSpecialization extends MyBaseModel {
  override type = MetaDataType.COURSE_SPECIALIZATION;
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
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
  })
  eligibilty: string;

  @Column({
    type: DataType.STRING,
  })
  delivery_mode: string;

  @Column({
    type: DataType.INTEGER,
  })
  credits: number;

  @Column({
    type:DataType.STRING,
    defaultValue:'customCourse'
  })
  courseType:CourseType

  @Column({
    type: DataType.STRING,
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
  })
  students_enrolled: number;

  @Column({
    type: DataType.BOOLEAN,
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

  @Column({
    type: DataType.TEXT
  })
  shortInfo:string

  @Column({
    type:DataType.STRING
  })
  days:string

  

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
    allowNull:true
  })
  @ForeignKey(() => University)
  university_id: string;

  @BelongsTo(() => University)
  university: University;

  @Column({
    type: DataType.STRING,
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
