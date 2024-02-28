import { BelongsTo, Column, DataType, Default, ForeignKey, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MetaData } from "../metaData/meta.model";
import { GlobalPartner } from "../globalPartner/global-partner.model";
import { BaseModel } from "src/core/helpers/BaseModel";
import { type } from "../metaData/dto/type.enum";
import { MyBaseModel } from "src/core/base.model";

@Table({
    tableName:'contacts'
})
export class Contacts extends MyBaseModel{
    override type=type.CONTACTS
    @Column
    address:string

    @Column
    phone:string

    @Column
    website:string

    @Column
    email:string

    @Column
    addressIcon:string

    @Column
    phoneIcon:string

    @Column
    websiteIcon:string

    @Column
    emailIcon:string
    

    @ForeignKey(()=>GlobalPartner)
    globalPartnerID:string

    @BelongsTo(()=>GlobalPartner)
    globalPartner:GlobalPartner
}