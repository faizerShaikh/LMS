import { BelongsTo, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { PageContent } from "../PageContent/pageContent.model";
import { MyBaseModel } from "src/core/base.model";

@Table
export class gallery extends MyBaseModel{



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