import { UUIDV4 } from "sequelize";
import { Column, DataType, Default, ForeignKey, HasMany, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Events } from "../event.model";
import { Webinar } from "../../webinar/webinar.model";

@Table({
    paranoid:true,
    tableName:'event-registrations'
})
export class EventRegistration extends Model{
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id:string

    @Column
    firstName:string

    @Column
    lastname:string

    @Column
    email:string

    @Column
    mobileNumber:string

    @Column 
    experience:string

    @Column
    degree:string

    @ForeignKey(()=>Events)
    @Column
    eventId:string
    
}