import { BelongsTo, Column, DataType, Default, ForeignKey, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { MetaData } from "../metaData/meta.model";
import { GlobalPartner } from "../globalPartner/global-partner.model";

@Table({
    tableName:'contacts'
})
export class Contacts extends Model{
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id:string

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