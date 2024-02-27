import { Column,  Default, HasOne, Model, Table } from "sequelize-typescript";
import { FaqTopic } from "./faqTopic/faqTopic.model";
import { MyBaseModel } from "src/core/base.model";

@Table({
    tableName:'faqs'
})
export class Faq extends MyBaseModel{
    @Column
    question:string

    @Default(false)
    @Column
    visiblity:Boolean

    @HasOne(()=>FaqTopic)
    faqTopic:FaqTopic

}