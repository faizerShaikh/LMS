import { BelongsTo, Column, DataType, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PageContent } from "../PageContent/pageContent.model";

@Table
export class gallery extends Model{


    @IsUUID(4)
    @PrimaryKey
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