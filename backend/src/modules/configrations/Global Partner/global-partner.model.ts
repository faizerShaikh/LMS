import { Column, DataType, Default, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MetaData } from "../Meta Data/meta.model";
import { Contacts } from "../Contact Details/contact.model";

@Table({
    tableName: 'global-partners'
})
export class GlobalPartner extends Model{

    @PrimaryKey
    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @Column
    id:string

    @Column
    name:string

    @Column
    coverImage:string

    @Column
    backgroundImage:string

    @Column(DataType.TEXT)
    description:string

    @Column(DataType.TEXT)
    vision:string

    @Column(DataType.TEXT)
    objective:string

    @Column
    popular_course:boolean

    @HasOne(()=> MetaData)
    metaData:MetaData

    @HasOne(()=>Contacts)
    contacts:Contacts
    
}