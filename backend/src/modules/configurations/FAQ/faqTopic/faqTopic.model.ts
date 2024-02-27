import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Faq } from "../faq.model";
import { MyBaseModel } from "src/core/base.model";

@Table({
    tableName:'faq-topics'
})
export class FaqTopic extends MyBaseModel{

    @Column
    topic:string

    @Column(DataType.TEXT)
    answer:string

    @ForeignKey(()=>Faq)
    faqId:string

    @BelongsTo(()=>Faq)
    faq:Faq
}