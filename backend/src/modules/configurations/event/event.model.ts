import { Column, DataType,  Table,ForeignKey,BelongsTo, Model, Default, HasMany, HasOne,  } from "sequelize-typescript";
import { MyBaseModel } from "src/core/base.model";
import { User } from "src/modules/user/users/models/user.model";
import { EventRegistration } from "./eventRegistration/eventRegistration.model";
import { type } from "../metaData/dto/type.enum";
import { location } from "./dtos/event.enum";
import { Webinar } from "../webinar/webinar.model";
@Table({
    tableName:'events',
    modelName: 'Events',
    paranoid:true
})
export class Events extends MyBaseModel{
  override type: type.EVENT;
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
    name:string

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
        },})
    description:string

    @Default('/media/default.png')
    @Column(DataType.STRING)
    eventImage:string

    
    @Column(DataType.DATE)
    startDayTime:Date

    @Column(DataType.DATE)
    endDayTime:Date

    @Column(DataType.DATE)
    deadLine:Date

    @Column(DataType.STRING)
    eventType:string

    @Column
    eventLocation:location

    @Column(DataType.BOOLEAN)
    isFeatured:boolean

    @ForeignKey(() => User)
    created_by_id: string;
  
    @BelongsTo(() => User)
    created_by: User;

    @HasMany(()=>EventRegistration,{
      onDelete: 'CASCADE',
      onUpdate:'CASCADE',

    })
    eventRegistrations: EventRegistration[]

    @ForeignKey(()=>Webinar)
    @Column
    webinarId:string
    
}