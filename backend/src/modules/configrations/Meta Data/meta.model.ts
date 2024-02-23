import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { type } from "./dto/type.enum";
import { Events } from "../event/event.model";
import { Faq } from "../FAQ/faq.model";
import { Blog } from "src/modules/blog/model";
import { CourseSpecialization } from "../course-specialization/model";
import { Press } from "../Press Release/press.model";
import { PageContent } from "../PageContent/pageContent.model";

@Table({
    tableName:'meta-data'
})
export class MetaData extends Model{
    
    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id:string
    
    @Column
    keywords:string

    @Column
    str:string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        validate: {
        len: [1, 150]
        }
    })
    description:string

    @Column
    subject:string

    @Column
    copyright:string

    @Column
    summary:string

    @Column
    classification:string

    @Column
    author:string

    @Column
    owner:string

    @Column
    url:string

    @Column
    pageName:string

    @Column
    category:string

    @Column
    subtitle:string

    @Column
    replyTo:string

    @Column
    type:type

    @Default(false)
    @Column
    isRefrenced:boolean

    @Column
    slug:string

    @ForeignKey(()=>Events)
    event_id:string

    @BelongsTo(()=>Events)
    event:Event

    @ForeignKey(()=>Faq)
    faqID:Faq

    @BelongsTo(()=>Faq)
    faq:Faq

    @ForeignKey(()=>Blog)
    blogID:Blog

    @BelongsTo(()=>Blog)
    blog:Blog

    @ForeignKey(()=>CourseSpecialization)
    courseSplID:CourseSpecialization

    @BelongsTo(()=>CourseSpecialization)
    courseSpl:CourseSpecialization

    @ForeignKey(()=> Press)
    pressID:string

    @BelongsTo(()=>Press)
    press:Press

    @ForeignKey(()=>PageContent)
    pageID:PageContent

    @BelongsTo(()=>PageContent)
    page:PageContent

}