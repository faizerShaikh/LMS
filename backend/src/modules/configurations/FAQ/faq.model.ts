import { Column,  Default, HasOne, Model, Table } from "sequelize-typescript";
import { FaqTopic } from "./faqTopic/faqTopic.model";
import { MyBaseModel } from "src/core/base.model";
import { type } from "../metaData/dto/type.enum";

@Table({
    tableName:'faqs',
    paranoid:true
})
export class Faq extends MyBaseModel{
    override type= type.FAQ;
    @Column
    question:string

    @Default(false)
    @Column
    visiblity:Boolean

    @HasOne(()=>FaqTopic)
    faqTopic:FaqTopic

}