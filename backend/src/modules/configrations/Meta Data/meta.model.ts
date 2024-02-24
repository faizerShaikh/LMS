import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { type } from "./dto/type.enum";
import { Events } from "../event/event.model";
import { Faq } from "../FAQ/faq.model";
import { Blog } from "src/modules/blog/model";
import { CourseSpecialization } from "../course-specialization/model";
import { Press } from "../Press Release/press.model";
import { PageContent } from "../PageContent/pageContent.model";
import { University } from "../university/model";
import { Course } from "../course/model";
import { GlobalPartner } from "../Global Partner/global-partner.model";
import { Contacts } from "../Contact Details/contact.model";

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
    faqID:string

    @BelongsTo(()=>Faq)
    faq:Faq

    @ForeignKey(()=>Blog)
    blogID:string

    @BelongsTo(()=>Blog)
    blog:Blog

    @ForeignKey(()=>CourseSpecialization)
    courseSplID:string

    @BelongsTo(()=>CourseSpecialization)
    courseSpl:CourseSpecialization

    @ForeignKey(()=> Press)
    pressID:string

    @BelongsTo(()=>Press)
    press:Press

    @ForeignKey(()=>PageContent)
    pageID:string

    @BelongsTo(()=>PageContent)
    page:PageContent

    @ForeignKey(()=>University)
    universityID:string

    @BelongsTo(()=>University)
    university:University

    @ForeignKey(()=>Course)
    courseID:string

    @BelongsTo(()=>Course)
    course:Course

    @ForeignKey(()=>GlobalPartner)
    globaPartnerID:string

    @BelongsTo(()=>GlobalPartner)
    GlobalPartner:GlobalPartner

    @ForeignKey(()=>Contacts)
    contactID:string

    @BelongsTo(()=>Contacts)
    contact:Contacts

}