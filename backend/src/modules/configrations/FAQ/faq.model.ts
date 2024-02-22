import { Column, DataType, Default, HasMany, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { FaqTopic } from "./FAQ Topics/faqTopic.model";

@Table({
    tableName:'FAQs'
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

    @HasMany(()=>FaqTopic)
    faqTopic:FaqTopic
}