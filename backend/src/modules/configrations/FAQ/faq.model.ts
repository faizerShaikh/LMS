import { Column, DataType, Default, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { FaqTopic } from "./FAQ Topics/faqTopic.model";
import { MetaData } from "../Meta Data/meta.model";

@Table({
    tableName:'faqs'
})
export class Faq extends Model{
    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id:string

    @Column
    question:string

    @Default(false)
    @Column
    visiblity:Boolean

    @HasOne(()=>FaqTopic)
    faqTopic:FaqTopic

    @HasOne(()=>MetaData)
    metadata:MetaData
}