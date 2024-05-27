import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Faq } from "../faq.model";


@Table({
    tableName:'faq-topics',
    paranoid:true
})
export class FaqTopic extends Model{

    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;


    @Column
    topic:string

    @Column(DataType.TEXT)
    answer:string


    @ForeignKey(()=>Faq)
    faqId:string

    @BelongsTo(()=>Faq,{
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        hooks:true,
    })
    faq:Faq
}