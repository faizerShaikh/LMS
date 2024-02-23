import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PageContent } from "../PageContent/pageContent.model";

@Table
export class gallery extends Model{


    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id:string

    @Column
    coverImage:string

    @Column
    name:string

    @Column({type:DataType.TEXT})
    description:string

    
    @ForeignKey(()=>PageContent)
    pageId:string

    @BelongsTo(()=>PageContent)
    pageContent:PageContent

}