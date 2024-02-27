import { BelongsTo, Column, DataType, Default, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MetaData } from "../metaData/meta.model";
import { Contacts } from "../cotacDetails/contact.model";
import { MyBaseModel } from "src/core/base.model";

@Table({
    tableName: 'global-partners'
})
export class GlobalPartner extends MyBaseModel{

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

    @HasOne(()=>Contacts)
    contacts:Contacts
    
}