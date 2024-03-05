import { Column,  DataType,  Default, HasMany, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { FaqTopic } from "./faqTopic/faqTopic.model";

@Table({
    tableName:'faq',
    paranoid:true
})
export class Faq extends Model{

    @IsUUID(4)
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column
    id: string;

    @Column
    orderBy:number

    @Column
    question:string
 
    @Default(false)
    @Column
    isFeatured:Boolean

    @HasMany(()=>FaqTopic,
    {onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,}) 
    faqTopic:FaqTopic[]

}