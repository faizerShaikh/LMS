import { validate } from "class-validator";
import { UUIDV4 } from "sequelize";
import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { CourseSpecialization } from "./course-specialization.model";

@Table({
    tableName:'infos',
    paranoid:true
})
export class Info extends Model{

    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id : string

    @Column({
        type:DataType.TEXT,
        allowNull:false,
        validate:{
          notNull: {
            msg: 'description can not be empty',
          },
          notEmpty: {
            msg: 'description can not be empty',
          },
        }
    })
    description:string

    @Default('/media/default.png')
    @Column
    image:string

    
  @ForeignKey(() => CourseSpecialization)
  course_specialization_id: string;

  @BelongsTo(() => CourseSpecialization)
  course_specialization: CourseSpecialization;
}