import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Faq } from "../faq.model";
import { MyBaseModel } from "src/core/base.model";
import { type } from "../../metaData/dto/type.enum";

@Table({
    tableName:'faq-topics',
    paranoid:true
})
export class FaqTopic extends MyBaseModel{
    override type:type.FAQTOPIC
    @Column
    topic:string

    @Column(DataType.TEXT)
    answer:string

    @ForeignKey(()=>Faq)
    faqId:string

    @BelongsTo(()=>Faq)
    faq:Faq
}