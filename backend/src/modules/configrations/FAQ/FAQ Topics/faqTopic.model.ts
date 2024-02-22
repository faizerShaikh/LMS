import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Faq } from "../faq.model";

@Table({
    tableName:'faq topics'
})
export class FaqTopic extends Model{
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id:string

    @Column
    topic:string

    @Column(DataType.TEXT)
    answer:string

    @ForeignKey(()=>Faq)
    faqId:string

    @BelongsTo(()=>Faq)
    faq:Faq
}